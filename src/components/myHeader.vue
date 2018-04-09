<template>
  <!-- Static navbar -->
  <div>
    <nav class="navbar navbar-default navbar-static-top nav-shadow">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <img class="top-logo" src="/static/logo.png" alt="">
          <a class="navbar-brand logo-left" href="#/" @click="change(0,'/')"><span class="bg-logo">ICO</span><span class="sm-logo">date</span></a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
          <ul class="fixed-width nav navbar-nav navbar-active" style="cursor:pointer">
            <li :class="{active:act[0]}"><a @click="change(0,'/ongoing')" href="#ongoing">{{lang=="eng"?"ICO":"ICO"}}</a></li>
            <li :class="{active:act[3]}"><a @click="change(3,'/data')" href="#data">{{lang=="eng"?"Events":"会议"}}</a></li>
            <li :class="{active:act[4]}"><a @click="change(4,'/advertise')" href="#advertise">{{lang=="eng"?"Advertise":"赞助"}}</a></li>
            <li :class="{active:act[2]}"><a @click="change(2,'/past')" href="#past">{{lang=="eng"?"Past":"过往数据"}}</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{{lang=='eng'?'lang':'语言'}} <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <!-- <li ><a style="cursor:not-allowed" href="javascript:void(0)">简体中文(建设中)</a></li> -->
                <li ><a style="cursor:pointer" @click="changeLang(0)">简体中文</a></li>
                <li><a @click="changeLang(1)" href="#">English</a></li>
              </ul>
            </li>
            <li><a href="javascript:void(0)">{{lang}}</a></li>
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="news-broadcast">
    <div class="broad">
      <!-- <img src="/static/broadcast.png" alt=""> -->
      <div class="cast"><i class="fa fa-bullhorn" aria-hidden="true"></i> {{lang=='eng'?cast:castZh}}</div>
    </div>
    <div class="btc">
      BTC ${{btc_price}} <span :style="{color:(red_green[0]?'red':'green')}" class="btc_eth_rate">{{btc_rate|plus}}</span> 
    </div>
    ,
    <div class="eth"> 
      ETH ${{eth_price}} <span :style="{color:(red_green[1]?'red':'green')}" class="btc_eth_rate">{{eth_rate|plus}}</span>
    </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'myheader',
  data () {
    return {
      myHeader: 'this is myHeader',
      act:[1,0,0,0],
      btc_price:'...',
      btc_rate:'...',
      eth_price:'...',
      eth_rate:"...",
      red_green:[0,0],
      lang:"eng",
      cast:"More infos will be added soon!",
      castZh:"更多特色，敬请期待!"
    }
  },
  beforeMount:function(){

    var that = this;
    that.getBtcAndEthPrice();
    //every 60 seconds update the price
    setInterval(function(){
      that.getBtcAndEthPrice();
    }, 60000);

    var localLang = localStorage.getItem('lang');
    if(!localLang){
      that.lang='eng';
    }else{
      that.lang=localLang;
    }

    var localAct = localStorage.getItem('act');
    if(localAct){
      this.act = JSON.parse(localAct)
    }
  },
  methods:{
    change(x,_path){
      // console.log(_path);
      if(_path=='/'){
        this.act=[1,0,0,0,0,0];
        localStorage.setItem('act',JSON.stringify(this.act))
        // console.log(this.act)
      }else{
        this.act=[0,0,0,0,0,0];
        this.act[x]=1;
        this.$router.push({path:_path});
        // console.log(this.$router)
        // console.log(_path);
        localStorage.setItem('act',JSON.stringify(this.act))
        // console.log(this.act)
      }
      
    },
    getBtcAndEthPrice(){
      var that = this;
      axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=2')
      .then(function(response){
        response = response.data;
        that.btc_price = response[0]['price_usd'];
        that.btc_rate = response[0]['percent_change_24h']+"%";
        if(!that.btc_rate.indexOf('-')){
          that.red_green[0]=1;
        }
        that.eth_price = response[1]['price_usd'];
        that.eth_rate = response[1]['percent_change_24h']+"%";
        if(!that.eth_rate.indexOf('-')){
          that.red_green[1]=1;
        }
      })
    },
    changeLang(x){
      x===0?this.lang='zh':this.lang="eng";
      localStorage.setItem('lang',x===0?'zh':'eng');
    }
  },
  filters:{
    plus(value){
      if(value.indexOf('-')){
        return '+'+value;
      }else{
        return value;
      }
    }
  },
  computed:{

  },
  mounted(){
    // $('.dropdown-toggle').dropdown()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.navbar-header{
  position: relative;
}
#navbar li a,.logo-left{
  font-weight: 900;
  /*color:steelblue;*/
}
.navbar-nav>li>a{
  color:steelblue;
}
.logo-left{
  margin-left: 50px !important;
  padding:15px 8px;
  color:steelblue;
}
.top-logo{
  position: absolute;
  height: 46px;
  width: 46px;
  top:2px;
  left:2px;
}
.bg-logo{
  font-size: 1.8em;
  color:steelblue;
}
.sm-logo{
  font-size: 1.2em;
  color: steelblue;
  margin-right: 20px;
}
.nav-shadow{
  box-shadow: 0px 3px 5px whitesmoke;
  font-family: 'Open Sans', sans-serif;
  /*color: steelblue !important;*/
  font-size: 1.2em;
}
.news-broadcast{
  margin:0px 35px;
  margin-bottom: 12px;
}
.btc,.eth{
  display: inline-block;
  font-weight: bold;
  margin-top: 12px;
}
.broad{
  margin-top: -16px;
  text-align: left;
  height: 20px;
  /*border:solid 1px red;*/
}
.broad img{
  height: 18px;
  vertical-align: middle;
}
.broad .cast{
  display: inline-block;
  line-height: 20px;
  margin-left: 8px;
  color: grey;
  /*border:solid 1px red;*/
}
@media screen and (max-width: 580px){
  .broad{
    height: 12px;
    margin-left: -15px;
  }
  .broad img{
    height: 12px;
    vertical-align: middle;
  }
  .broad .cast,.btc,.eth{
    line-height: 12px;
    font-size: 0.75em;
    margin-left: 1px;
  }
}
@media screen and (min-width: 1080px){
  .news-broadcast{
    margin:0px 135px;
    margin-bottom: 22px;
}
}
.dropdown-menu{
  text-align: center;
}
ul.navbar-right>li:last-child{
  width:61px;
}
ul.fixed-width li{
  min-width:80px;
}
</style>
