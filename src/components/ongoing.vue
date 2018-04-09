<template>
  <div class="ongoing">
  <div class="container-fluid">
    <div class="row">
      <!-- ongoing icos -->
      <div class="col-12 col-md-4">
      <h1 class="title">Ongoing<span class="badge">{{ongoings.length}}</span></h1>
      <div  v-for="(item,index) in (all[0]?ongoings:ongoings.slice(0,14))" @click="detail(item,index)" :class="{'items':true,'sponsored':item.sponsored=='Sponsored'}">
      <div class="my-thumbnail"><img :src="item.src" :alt="item.alt"></div>
      <div class="brief">
        <div class="name">{{item.name}}</div>
        <div class="divider"></div>
        <div class="info"><span class="strong-info">TYPE: </span>{{item.info}}<br/><span class="strong-info">GOAL: </span><span class="info-goal">{{item.token.goal}}</span></div>
        <i v-if="item.hot" title="hot" class="fa fa-bolt" aria-hidden="true"></i>
        <i  title="Sponsored" v-if="item.sponsored=='Sponsored'" class="fa fa-rocket" aria-hidden="true"></i>
        
      </div>
      <div class="foot">
      <span class="sponsor" title="hype">{{item.sponsored}}</span>
      <span class="date" title="End in">End in {{item.date.split(' ')[0]}} </span>
      </div>
      </div>
      <div v-if="!all[0]" class="btn see_detail btn-default" @click="see('0',$event)">show all</div>
      </div>
      <!-- upcoming icos -->
      <div class="col-12 col-md-4">
      <h1 class="title">Upcoming<span class="badge">{{upcomings.length}}</span></h1>
      <div v-for="(item,index) in (all[1]?upcomings:upcomings.slice(0,14))" @click="detail(item,index)"  :class="{'items':true,'sponsored':item.sponsored=='Sponsored'}">
      <div class="my-thumbnail"><img :src="item.src" :alt="item.alt"></div>
      <div class="brief">
        <div class="name">{{item.name}}</div>
        <div class="divider"></div>
        <div class="info"><span class="strong-info">TYPE: </span>{{item.info}}<br/><span class="strong-info">GOAL: </span><span class="info-goal">{{item.token.goal}}</span>
        <i  title="Sponsored" v-if="item.sponsored=='Sponsored'" class="fa fa-rocket" aria-hidden="true"></i>
        </div>
      </div>
      <div class="foot">
      <span class="sponsor" title="hype">{{item.sponsored}}</span>
      <span class="date">{{item.date}}</span>
      </div>
      </div>
      <div v-if="!all[1]" class="btn see_detail btn-default" @click="see('1',$event)">show all</div>
      </div>
     <!-- past icos -->
      <div class="col-12 col-md-4">
      <h1 class="title">Concluded<span class="badge">{{past.length}}</span></h1>
      <div v-for="(item,index) in (all[2]?past:past.slice(0,14))" @click="detail(item,index)" :class="{'items':true}">
      <div class="my-thumbnail"><img :src="item.src" :alt="item.alt"></div>
      <div class="brief">
        <div class="name">{{item.name}}</div>
        <div class="divider"></div>
        <div class="info"><span class="strong-info">TYPE: </span>{{item.info}}<br/><span class="strong-info">GOAL: </span><span class="info-goal">{{item.token.goal}}</span>
        <!-- <i v-if="item.sponsored=='Sponsored'" class="fa fa-rocket" aria-hidden="true"></i> -->
        </div>
      </div>
      <div class="foot">
      <span class="sponsor" title="hype">{{item.hype||item.sponsored}}</span>
      <span class="date">Ended</span>
      </div>
      </div>
      <div v-if="!all[2]" class="btn see_detail btn-default" @click="see('2',$event)">show all</div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import ongoingData from '../../static/js/ongoings.js'
import upcomingData from '../../static/js/upcomings.js'
import pastData from '../../static/js/pasts.js'

var ongoingData_sponsored = [];
var upcomingData_sponsored = [];
var pastData_sponsored = [];

export default {
  name: 'ongoing',
  data () {
    return {
      msg: 'Ongoing Page',
      rating:['Very High','High','Medium','Low','Very Low','Not Rated'],
      rt:['rateColor-vhigh','rateColor-high','rateColor-medium','rateColor-low',''],
      // ongoings:ongoingData,
      // upcomings:upcomingData,
      // past:pastData,
      all:[0,0,0],
      lang:'eng'
    }
  },
  beforeMount(){
    var localLang = localStorage.getItem('lang');
    if(!localLang){
      this.lang='eng';
    }else{
      this.lang=localLang;
    }
  },
  methods:{
    detail(item,idx){
      var name = item.name;
      // console.log(item);
      this.$router.push({name:'Detail',params:{id:name,dataObj:item}});
    },
    see(p,e){
      var that = this;
      e.currentTarget.innerText = 'loading...';
      console.log(e);
      setTimeout(function(){
        that.all.splice(p,1,1);
      },800)
      
    },
    sort_sponsored(a,b){
      return -(!!a.sponsored-!!b.sponsored);
    }
  },  
  //sort
  computed:{
    ongoings:function(){
      var allData = ongoingData.concat(upcomingData).concat(pastData);
      //返回数据，赞助排名靠前
      return allData.filter(function(x){return x.sponsored=="Sponsored"}).concat(allData).filter(function(e,i,a){return i == a.indexOf(e)});
    },
    upcomings:function(){
      return upcomingData;
    },
    past:function(){
      return pastData;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.ongoing{
  margin:0 auto;
}
.title{
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 1.8em;
  font-family: 'Rajdhani', sans-serif;
}
.items{
  border:solid 1px lightgrey;
  box-shadow: 0px 3px 3px whitesmoke; 
  border-radius: 1px;
  margin-top: 24px;
  padding:3px;
  overflow: hidden;
  min-width: 280px;
  position: relative;
}
.my-thumbnail{
  height: 62px;
  width:62px;
  padding:1px;
  /*border:solid 1px red;*/
  float: left;
  /*border:solid 1px red;*/
}
.my-thumbnail img{
  height: 58px;
  width:58px;
  border-radius: 3px;

}
.brief{
  /*border:solid 1px red;*/
  height: 70px;
  min-width:187px;
  /*width: 70%;*/
  float: left;
  /*border:dashed 1px grey;*/
  font-size: 0.85em;
  text-align: left;
  padding-left: 12px;
}
.foot{
  clear: both;
  margin-top: 78px;
  margin-bottom: 4px;
  height: 0.8em;
}
.sponsor{
  float:left;
  margin-left: 16px;
  color:grey;
}
.date{
  float:right;
  margin-right: 16px;
  color:grey;
}
.divider{
  height: 0px;
  /*border-top:2px dashed lightgrey;*/
  width: 130px;
}
.name{
  font-weight: bold;
  font-size: 1.3em;
  margin-bottom: 4px;
}
/*.name:hover{
  outline-bottom: solid 2px steelblue;
  display: inline-block;
}*/
.info{
  /*width:85%;*/
  max-width: 180px;
  height: 77%;
  font-family: 'Jura';
  font-size: 0.9em;
  font-weight: bold;
  line-height: 1.2em;
  overflow: hidden;
  /*border-bottom:dashed 1px grey;*/
}
.items:hover{
  box-shadow: 2px 5px 5px lightgrey; 
  cursor: pointer;
  transition: 0.1s;
}
span.strong-info{
  font-weight: 700;
}
.info-goal{
  color:steelblue;
}
.brief i{
  position: absolute;
  top:8px;
  right: 8px;
  color: steelblue;
}
.rateColor-vhigh{
  color:red;
}
.rateColor-high{
  color:orange;
}
.rateColor-medium{
  color:yellow;
}
.rateColor-low{
  color:lightblue;
}
.sponsored{
  outline:solid 3px gold;
  border: solid 1px white;
}
.sponsored .foot span.sponsor{
  color:gold;
}
.sponsored .foot i{
  display: 
}
.brief i{
  position: absolute;
  top:8px;
  right: 8px;
  color: gold;
}
.foot .date,.sponsor{
  font-family: 'Jura';
  font-weight: bold;
}
@media screen and (min-width: 1400px){

  .ongoing{
    width:80%;
  }
  .items{
    max-width:400px; 
  }
}
@media screen and (min-width: 1092px) and (max-width: 1400px){
  .ongoing{
    width:85%;
  }
}
/*@media screen and (min-width: 981px) and (max-width: 1092px){
  .ongoing{
    width:90%;
  }
}*/

@media screen and (max-width: 1092px) and (min-width: 769px){
  .ongoing{
    width:88%;
  }
  .items{
    max-width:570px; 
    margin-left: auto;
    margin-right: auto;
  }
}
@media screen and (max-width: 768px){
  .ongoing{
    width:85%;
  }
}
@media screen and (max-width: 568px){
  .ongoing{
    width:98%;
  }
}
span.badge{
  background-color: grey;
  border-radius: 3px;
  margin-left: 2px;
}
.see_detail{
  /*color:steelblue;
  border-radius: 3px;
  
  margin:10px 2px;
  height: 24px;
  font-size: 24px;*/
  background-color: whitesmoke;
  width: 120px;
  font-size: 18px;
  margin:10px 2px;
}
.see_detail:hover{
  background-color: lightgrey;
}
</style>
