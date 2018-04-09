<template>
  <div class="footer">
    <!-- <div class="motto">
    </div> -->
    <div class="contact">
      {{motto}}{{contact}}Built with <i class="fa fa-heart" aria-hidden="true"></i>
      <a href="mailto:icodate@gmail.com">icodate@gmail.com</a>
      <span class="copyright">© ICOdate 2016-2017</span>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {
      motto: '',
      contact:"For questions or cooperation, please email us."
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  position: absolute;
  bottom: 0px;
  /*margin-top:120px;*/
  /*font-family: 'Ubuntu', sans-serif;*/
  /*font-family: 'Open Sans', sans-serif;*/
  /*font-weight: 600;*/
  width: 100%;
  font-size: 1.1em;
  margin-bottom:0px;
  background-color:#f8f8f8; 
  min-height: 44px;
  line-height: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  border-top:solid 1px #e7e7e7;
}
@media screen and (max-width: 550px){
  .footer{
    font-size: 0.85em;
    min-height: 46px;
    padding-top: 7px;
    padding-bottom: 7px;
    line-height: 15px;
  }
}
/*.motto{
  color:grey;
  font-style: italic;
}*/
.contact i{
  color:red;
}
</style>
