<!--新闻列表-->
<template>
    <div>
      <HeaderVue :title="title">
        <router-link to="/" slot="right"><i class="iconfont icon-homepage c-fff"></i></router-link>
      </HeaderVue>



    </div>
</template>
<script>
  export default {
    data() {
      return {
        title:'悠乐News',
        index:'dsad'
      }
    },
    methods: {},
    components: {}

  }

</script>
<style scoped lang="less">


</style>
