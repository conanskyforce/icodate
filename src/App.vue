<template>
  <div id="app">
    <my-header></my-header>
      <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    <my-footer></my-footer>
  </div>
</template>
<script>
  import myHeader from '@/components/myHeader'
  import myFooter from '@/components/myFooter'
  export default {
    name: 'app',
    data:function(){
      return {
        msg:'app.vue'
      }
    },
    components:{
      'my-header':myHeader,
      'my-footer':myFooter
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-family: 'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    min-height: 100%;
    position: relative;
    padding-bottom: 120px;
  }
  .logo-img{
    height: 120px;
  }
  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }

::-webkit-scrollbar  
{  
    width: 8px;  
    height: 8px;  
    background-color: white;  
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
