<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <div class="container">
    <div class="jumbotron">
    <strong>ICODATE </strong>
    is one of popular ICO databases. <br/>Built By Cryptocurrency Hobbyist,We are programmers,designers,and hobbyist of cryptocurrency.

    <p class="pin">More features will be live soon...</p>


      <div class="spec">
      <p>If you have any question and suggestions</p>
      <p>Please contact us.</p>
      </div>
      <div class="contact">
        <h1>CONTACTS</h1>
        <a title="icodate@gmail.com" href="mailto:icodate@gmail.com"><i class="fa fa-envelope-o" aria-hidden="true"></i></a>
      <!--   <br> <--><span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
        <!-- <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a> -->
        <a href="https://twitter.com/IcodateInfo"><i class="fa fa-twitter" aria-hidden="true"></i></a>
        <!-- <a href=""><i class="fa fa-slack" aria-hidden="true"></i></a> -->
      </div>
   <!--  <p><a class="btn btn-primary btn-lg" href="javascript:void(0)" role="button">MORE TYPES WILL COME SOON...</a></p> -->
    </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'About US.'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jumbotron{
  background-color: white;
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
  border:solid 1px lightgrey;
  box-shadow: 0px 3px 3px whitesmoke; 
  border-radius: 2px;
  margin-top: 24px;
  overflow: hidden;
  width: 350px;
  margin:0 auto;
  padding:3px;
  border:solid 2px gold;
  margin-bottom: 36px;
}
.my-thumbnail{
  box-sizing: border-box;
  height: 70px;
  width:70px;
  border-radius: 2px;
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
  border-radius: 3px;
}
.foot{
  clear: both;
  margin-top: 78px;
  margin-bottom: 4px;
  height: 0.8em;
}
.brief{
  height: 70px;
  min-width:200px;
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
  border-top:2px dashed grey;
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
  border-bottom:dashed 1px grey;
}
.sponsor{
  color: gold;
  font-weight: bold;
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
  margin-top:86px;
  margin-bottom: 24px;
}
</style>
