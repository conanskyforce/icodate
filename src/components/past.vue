<template>
  <div class="data">
    <h1>{{ msg }}</h1>
    <div class="my-table">
    <table class="table table-striped table-bordered table-hover table-responsive">
      <thead>
        <tr>
          <td>Name</td>
          <td>Type</td>
          <!-- <td>Link</td> -->
          <td>Ended</td>
          <td>Total Raised</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='idx in leng' :key="idx">
          <td>{{nname[idx-1]}}</td>
          <td>{{cate[idx-1]}}</td>
          <!-- <td>
          <a :href="link[idx-1]" target="_blank">{{link[idx-1]}}<i title="Out of Site" class="fa fa-external-link" aria-hidden="true"></i></a>
          <a class="default-hide" :href="link[idx-1]" target="_blank"><i title="Out of Site" class="fa fa-external-link" aria-hidden="true"></i></a>
          </td> -->
          <td>{{end[idx-1]}}</td>
          <td>{{raise[idx-1]}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import icoData from '../../static/js/icoresults.js'

export default {
  name: 'data',
  data () {
    return {
      msg: 'Past ICO results',
      nname:icoData.nname,
      cate:icoData.cate,
      // link:icoData.link,
      end:icoData.end,
      raise:icoData.raise,
      leng:icoData.nname.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: bold;
  font-size: 1.6em;
  margin-bottom: 12px;
}
.my-table{
  border-top:solid 1px lightgrey;
  border-bottom:solid 1px lightgrey;
}
thead td{
  font-weight: bold;
}
thead td:nth-child(1){
  width: 25%;
}

tbody td:nth-child(1){
  width: 25%;
  max-width: 140px;
}
tbody td:nth-child(2){
  width: 25%;
  min-width: 190px;
}
tbody td:nth-child(3){
  width: 25%;
  min-width: 100px;
}
tbody td:nth-child(4){
  min-width: 126px;
}
tbody td:nth-child(5){
  min-width: 150px;
}
table td{
  text-align: left;
}
.my-table{
  width: 90%;
  margin:0 auto;
  font-size: 0.85em;
  height: 560px;
  overflow-y: scroll;
}
@media screen and (max-width: 1220px){
  table td{
    font-size: 0.9em;
  }
}
tbody .default-hide{
    display: none;
}
@media screen and (max-width: 768px){

  table td{
  font-size: 0.5em;
  }
  /*tbody td:nth-child(0){
    width: 25%;
    max-width: 45px;
  }*/
  tbody td:nth-child(1){
    width: 25%;
    max-width: 80px;
    overflow: hidden;
  }
  tbody td:nth-child(2){
    /*width:25%;*/
    min-width: 40px;
    max-width: 90px;
    overflow: hidden;
  }
  tbody td:nth-child(4){
    min-width: 66px;
  }
/*  tbody td:nth-child(5){
    min-width: 80px;
  }*/
/*  tbody td:nth-child(2){
    min-width: 140px;
  }*/
  tbody td:nth-child(3){
    width: 25%;
    min-width: 5px;
  }
  tbody td:nth-child(3) a:nth-child(1){
    display: none;
  }
  tbody .default-hide{
    display: block;
  }
}


::-webkit-scrollbar  
{  
    width: 8px;  
    height: 8px;  
    background-color: #F5F5F5;  
}  
  
/*定义滚动条轨道 内阴影+圆角*/  
::-webkit-scrollbar-track  
{  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);  
    border-radius: 10px;  
    background-color: #F5F5F5;  
}  
  
/*定义滑块 内阴影+圆角*/  
::-webkit-scrollbar-thumb  
{  
    border-radius: 10px;  
    -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);  
    background-color: grey;  
}  
</style>
