<template>

  <div class="footer_box">
    <div class="footer">
      <router-link :to="{path:'/home'}" exact>
        <i data-v-69975988="" class="iconfont icon-homepage_fill"></i>
        <p>首页</p>
      </router-link>
      <router-link :to="{name:'linelist'}">
        <i data-v-69975988="" class="iconfont icon-xiazai13"></i>
        <p>热门线路</p>
      </router-link>
      <router-link :to="{name:'index'}">
        <i data-v-69975988="" class="iconfont icon-fensi4"></i>
        <p>寻地接</p>
      </router-link>
      <router-link :to="{name:'index'}">
        <i data-v-69975988="" class="iconfont icon-zutuan"></i>
        <p>搭伴游</p>
      </router-link>
    </div>
  </div>


</template>
<script>

</script>
<style lang="less" scoped>
  .footer_box{
    height: 55px;
    right: 0;
    bottom: 0;
    left: 0;
    position: fixed;
    .footer{
      height: 55px;
      right: 0;
      bottom: 0;
      left: 0;
      position: absolute;
      z-index: 1;
      background: #f5f5f5;
      display: flex;
      display: -webkit-flex;
      align-items: center;
      flex-flow: row nowrap;
      justify-content: center;
      border-top: 1px solid #ddd;
      box-sizing: border-box;
      a{
        flex: 1;
        color: #666;
      }
    }
  }
  /*.router-link-active{*/
    /*color: #1fcca9!important;*/
  /*}*/
  .router-link-exact-active{
    color: #1fcca9!important;
  }
</style>
