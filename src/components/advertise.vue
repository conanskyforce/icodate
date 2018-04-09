<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <div class="container">
    <div class="jumbotron">
    <strong>ICODATE </strong>
    is one of popular ICO databases. <br/>Most of our users are from Russia, America, Japan and China,etc.

    <p class="pin">PINNED «SPONSORED» FORMAT</p>

    <div  class="items">
      <div class="my-thumbnail"><img src="/static/logo.png" alt="pic"></div>
      <div class="brief">
        <div class="name">ICO name</div> 
        <div class="divider"></div>
        <div class="info">TYPE:TYPE<br/>GOAL: <span class="info-goal">$75,000,000</span></div>
        <i title="Sponsored" class="fa fa-rocket" aria-hidden="true"></i>
      </div>
      <div class="foot">
      <span class="sponsor">Sponsored</span>
      <span class="date">10 October</span>
      </div>
      </div>
      <div class="spec">
      <p>ATTENTION!</p>
      <p>Only approved ICOs can advertise on our site!</p>
      <p>Pinned to the top of the column</p>
      <p>There aren't more than 6 positions in a column</p>
      <p>Minimum accommodation - 2 weeks</p>
      </div>
      <div class="contact">
        <h1>AD CONTACTS</h1>
        Email - <a href="mailto:icodate@gmail.com">icodate@gmail.com</a>
      </div>
    <p><a class="btn btn-primary btn-lg" href="javascript:void(0)" role="button">MORE TYPES WILL COME SOON...</a></p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Advertising on ICODATE'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
  /*background-color: white;*/
  margin-bottom: 0px;

}
.jumbotron p a{
  width: 100%;
}
strong{
  font-weight: bold;
}
h1, h2 {
  font-weight: bold;
  font-size: 1.6em;
  margin-bottom: 12px;
}
.pin{
  margin-top:50px;
  margin-bottom:50px;
  font-weight: bold;
}

/*item*/
.items{
  /*border:solid 1px lightgrey;*/
  box-shadow: 0px 3px 3px whitesmoke; 
  border-radius: 2px;
  margin-top: 24px;
  overflow: hidden;
  max-width: 350px;
  margin:0 auto;
  padding:3px;
  outline:solid 3px gold;
  margin-bottom: 36px;
  position: relative;
}
.my-thumbnail{
  box-sizing: border-box;
  height: 70px;
  width:70px;
  background-color:lightgrey;
  text-align: center;
  line-height: 70px;
  padding:3px;
  border-radius: 50%;
  /*border:solid 1px red;*/
  float: left;
}
.my-thumbnail img{
  height: 62px;
  width:62px;
  border-radius: 50%;
}
.foot{
  clear: both;
  margin-top: 78px;
  margin-bottom: 4px;
  height: 0.8em;
}
.brief{
  height: 70px;
  min-width:180px;
  width: 70%;
  float: left;
  /*border:dashed 1px grey;*/
  font-size: 0.85em;
  text-align: left;
  padding-left: 12px;
}
.sponsor{
  float:left;
  margin-left: 16px;
}
.date{
  float:right;
  margin-right: 16px;
}
.divider{
  height: 0px;
  /*border-top:2px dashed grey;*/
  width: 130px;
}
.name{
  font-weight: bold;
  font-size: 1.2em;
  margin-bottom: 4px;
}
.info{
  width:85%;
  height: 77%;
  overflow: hidden;
  padding:2px;
  /*border-bottom:dashed 1px grey;*/
}
.sponsor{
  color: gold;
}
/*.items:hover{
  border:solid 1px lightgrey;
  box-shadow: 2px 5px 5px lightgrey; 
  cursor: pointer;
  transition: 0.1s;
}*/
/*item*/
.spec p{
  color:black;
  font-size: 0.95em;
  font-weight: bold;
}
.contact{
  margin-top:46px;
  margin-bottom: 24px;
}
.info-goal{
  color:steelblue;
}
.brief i{
  position: absolute;
  top:8px;
  right: 8px;
  color: gold;
}
</style>
