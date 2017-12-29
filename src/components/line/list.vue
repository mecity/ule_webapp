<!--线路列表-->
<template>
<div>
  <HeaderVue :title="title">
    <router-link to="/" slot="right"><i class="iconfont icon-homepage c-fff"></i></router-link>
  </HeaderVue>
  <div class="list_box">
    <div style="height: 2000px;">cdsadsa</div>




  </div>
  <FooterVue></FooterVue>
</div>
</template>
<script>
  export default {
    data(){
      return {
        title:'地接线路',
      }
    },
    methods:{

    },
    components:{

    }

  }

</script>
<style scoped lang="less">
  .list_box{
    box-sizing: border-box;
    position: fixed;
    top:40px;
    bottom: 55px;
    left: 0px;
    right: 0px;
    text-align: left;
    overflow-y: auto;
  }


</style>
