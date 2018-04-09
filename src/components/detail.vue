<template>
<div class="container">
<div class="row justify-content-center">
<div class="col-12">
  <div class="detail">
    <div class="title"><img :src="routerParams.src" :alt="routerParams.alt" />
      <div class="right">
        <div class="name"><h1>{{ routerParams.name }}<span>({{routerParams.info}})</span></h1></div>
        <div class="brief">{{routerParams.details}}</div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="DETAIL2">
      <div class="logo"><i class="fa fa-home" aria-hidden="true"></i> Introduction<span>({{routerParams.sponsored=='Sponsored'?'High':routerParams.sponsored}})</span></div>
      <div class="details">
      <div class="icoMedia" v-if="routerParams.icoMediaImg">
        <br />
        <iframe v-if="routerParams.icoMediaImg.indexOf('youtube')!=-1" :src="routerParams.icoMediaImg" frameborder="0" allowfullscreen></iframe>
      </div>
      <div v-else>{{routerParams.details}}</div>
      </div>
    </div>
    <div class="divider"></div>
    <div v-if="routerParams.features" class="features">
      <div class="logo"><i class="fa fa-bars" aria-hidden="true"></i> Features</div>
      <div class="content" v-html="routerParams.features">
        <!-- {{routerParams.features}} -->
      </div>
      <div class="divider"></div>
    </div>
    <div class="calendar">
      <div class="logo"><i class="fa fa-calendar" aria-hidden="true"></i> Token Sale({{routerParams.date}})</div>
      <div class="content">
      <div class="container">
      <div class="row">
        <div class="column-1 col-sm-6">
          <ul>
            <li v-show="routerParams.token.ticker">Ticker: <span class="tokensale">{{routerParams.token.ticker}}</span></li>
            <li v-show="routerParams.token.type">Token type: <span class="tokensale">{{routerParams.token.type}}</span></li>
            <li v-show="routerParams.token.price">Token price: <span class="tokensale">{{routerParams.token.price}}</span></li>
            <li v-show="routerParams.token.goal">Fundraising Goal: <span class="tokensale">{{routerParams.token.goal}}</span></li>
            <li v-show="routerParams.token.total">Total Tokens: <span class="tokensale">{{routerParams.token.total}}</span></li>
            <li v-show="routerParams.token.avail">Available for Token Sale: <span class="tokensale">{{routerParams.token.avail}}</span></li>
          </ul>
        </div>
        <div class="column-2 col-sm-6">
          <ul>
            <li v-show="routerParams.token.white">Whitelist: <span class="tokensale">{{routerParams.token.white}}</span></li>
            <li v-show="routerParams.token.kyc">Know Your Customer (KYC): <span class="tokensale">{{routerParams.token.kyc}}</span></li>
            <li v-show="routerParams.token.ban">Сan't participate: <span class="tokensale">{{routerParams.token.ban}}</span></li>
            <li v-show="routerParams.token.bonus">Bonus for the First: <span class="tokensale">{{routerParams.token.bonus}}</span></li>
            <li v-show="routerParams.token.accept">Accepts: <span class="tokensale">{{routerParams.token.accept}}</span></li>
          </ul>
        </div>
        </div>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="social">
      <div class="logo"><i class="fa fa-globe" aria-hidden="true"></i> Community</div>
      <ul>
        <li class="social-li" v-for="(item,key) in routerParams.socials" v-show="item">
          <a :href="item" target="_blank"><i :title="communityHash[key]" class="fa " :class="'fa-'+key" aria-hidden="true"></i>&nbsp;&nbsp;</a>
        </li>
      </ul>
    </div>
      
      
  </div>
  </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    data () {
      return {
        msg: 'Detail Page',
        routerParams:"",
        communityHash:{
        globe:'Official Site',
        paperclip:'Whitepaper',
        facebook:'Facebook',
        reddit:'Reddit',
        twitter:'Twitter',
        telegram:'Telegram',
        medium:'Medium',
        btc:'Bitcointalk',
        youtube:'Youtube',
        slack:'Slack',
        github:'Github'
        }
      }
    },
    created(){
      this.getParams()
    },
    methods:{
      getParams(){
        let routerParams = this.$route.params.dataObj;
        // console.log(routerParams);
        this.routerParams = routerParams;
        if(routerParams){
          localStorage.setItem('res',JSON.stringify(routerParams));
        }else{
          this.routerParams = JSON.parse(localStorage.getItem('res'));
        }
      }
    },
    watch:{
      '$route':'getParams'
    },
    computed:{
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .right .name span,.logo span{
    font-size:0.7em;
    color: grey;
  }
  h1{
    font-weight: bold;
    font-size: 1.8em;
  }
  .detail .title .name h1{
    /*border:dashed 1px grey;*/
  }
  .detail{
    width: 90%;
    margin:0 auto;
    overflow: hidden;
  }
  .detail .calendar .container{
    margin-left: 0px;
    margin-right: 0px;
    width: 100%;
  }
  .title{
    text-align: left;
    /*border:dashed 1px grey;*/
    overflow: hidden;

  }
  .title img{
    height: 120px;
    width: 120px;
    border-radius: 50%;
    float: left;
    margin-right: 18px;
    /*border-radius: 5px;*/
    border:solid 5px whitesmoke;
  }
  .right{
    float: left;
    max-width: 60%;
    min-width: 300px;
  }
  .brief{
    text-align: left;
    box-sizing: border-box;
    padding:4px 0px;
    /*text-indent: 2em;*/
    /*max-height: 90px;*/
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: 21px;

    /*border:dashed 1px grey;*/
  }
.divider{
  margin-top: 35px;
  margin-bottom: 15px;
  clear: both;
  height: 0px;
  border-top:2px solid whitesmoke;
}
.details{
  text-align: left;
  text-indent: 2em;
  font-size: 1.2em;
  overflow-wrap: break-word;
}
.detail2 h1,.detail{
  text-align: left;
}
.calendar{
  text-align: left;
}
.calendar img,.detail2 img,.social img {
  height: 30px;
  width: 30px;
  vertical-align: middle;
  margin-right: 2px;
}
.calendar .logo,.detail .logo,.social .logo{
    font-size: 1.5em;
    line-height: 30px;
    font-weight: bold;
}
.column-1,.column-2{
  /*border:dashed 1px yellow;*/
}
.calendar li{
  /*border-bottom:dashed 3px lightgrey;*/
  height: 30px;
  line-height: 30px;
  text-indent: 1em;
  font-weight: 600;
  color: grey;
}
.content{
  margin-top: 12px;
}
.social-li img{
  border-radius: 50%;
}
.social-li a:hover{
  text-decoration: none;
  color: black;
}
.social-li a:focus{
  text-decoration: none;
}
.social-li{
  display: inline-block;
  margin-top: 2px;
  font-size: 2em;
}
.tokensale{
  color:black;
}
.icoMedia{
  text-align: center;
}
.icoMedia iframe,video,.icoMedia img{
  width: 860px;
  height: 484px;
  max-width: 100%;
  max-height:  calc(max-width/1.7);
}
/*.row .col-lg-10{
  margin:0 auto !important;
}*/
/*@media screen and (max-width: 800px) and (min-width: 560px){
    .icoMedia iframe,video,.icoMedia img{
      max-width: 460px;
      max-height: 258px;
    }
}*/
.features .content{
  line-height: 1.5em;
  font-size: 1.2em;
}
@media screen and (max-width: 559px) {
    .icoMedia iframe,video,.icoMedia img{
      max-width: 100%;
      max-height: 200px;
    }
    .features .content{
      font-size: 1.0em;
    }
}

@media screen and (max-width: 680px) and (min-width: 480px){
  .brief,.calendar li,.detail2 .details{
    font-size: 0.85em;
  }
  .social-li{
    font-size: 1.85em;
  }
}
@media screen and (max-width: 479px){
  .social-li{
    font-size: 1.5em;
  }
  .tokensale{
    font-size: 0.80em;
  }
}
@media (min-width: 1200px){
  .col-lg-10{
    margin:0 auto !important;
  }
}
</style>
