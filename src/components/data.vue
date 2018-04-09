<template>
  <div class="data">
    <h1>{{ msg }}</h1>
    <div class="my-table">
    <table class="table table-striped table-bordered table-hover table-responsive">
      <thead>
        <tr>
          <td>Name</td>
          <td>Place</td>
          <td>Date</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for='idx in name.length-1'>
          <td><a target="_blank" :href="href[idx]">{{name[idx]}}</a>&nbsp;<i class="fa fa-external-link" aria-hidden="true"></i></td>
          <td>{{place[idx]}}</td>
          <td>{{date[idx]}}</td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
import newsData from '../../static/js/news.js'
export default {
  name: 'data',
  data () {
    return {
      msg: 'Latest Conference and Meetings',
      name:newsData.name,
      href:newsData.href,
      place:newsData.place,
      date:newsData.date,
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.my-table{
  border-top:solid 1px lightgrey;
  border-bottom:solid 1px lightgrey;
}
h1{
  font-weight: bold;
  font-size: 1.6em;
  margin-bottom: 12px;
}
thead td{
  font-weight: bold;
}
thead td:nth-child(1){
  width: 60%;
}
tbody td:nth-child(2){
  min-width: 80px;
}
tbody td:nth-child(3){
  min-width: 100px;
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
@media screen and (max-width: 768px){
  table td{
  font-size: 0.8em;
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
