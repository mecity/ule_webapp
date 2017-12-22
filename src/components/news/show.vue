<!--新闻详情页-->
<template>

    <div class="newsbox bg_white">
      <HeaderVue :title="title">
        <router-link to="/" slot="right"><i class="iconfont icon-homepage c-fff"></i></router-link>
      </HeaderVue>
      <div class="clearfix pt10 pl-10 pr-10 text-l">
        <strong class="f-16 text-c clearfix">{{title}}</strong>
        <p class="bd-t f-12 c-999 text-c">发布时间:{{show.time}}</p>
        <img v-if="photo" v-for="(value,index) in photo" :src="value"/>
        <div v-html="show.content" class="pt10"></div>
      </div>

    </div>
</template>
<script>
    export default {
        data() {
            return {
              id:false,
              title:false,
              show:false,
              photo:[],
            }
        },

        created(){
          this.id=this.$route.params.id;
          this.getshow(this.$route.params.id,this);
        },
        methods: {
          getshow:async(id,that)=>{
            that.$function.loadingAlert('正在加载中...');
            let config={
              timeout : 9000,
              baseURL : that.$store.state.webSite,
              headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
            that.$store.commit('creatSign',{id:that.$route.params.id});
            await that.$http.post('index.php/Api/News/getnewShow',that.$store.state.creatData,config)
            .then(function (res) {
              console.info(res)
              if(res.data.success){
                that.$function.loadingClose();
                that.id=res.data.data.id;
                that.title=res.data.data.title;
                that.show=res.data.data;
                that.photo=res.data.photos;
              }else{
                that.$function.alertToast('很遗憾数据获取失败....');
                return ;

              }
            })
          }

        },
        components: {}

    }

</script>
<style scoped lang="less">
    .newsbox{
      box-sizing: border-box;
      position: fixed;
      top:40px;

      bottom: 0px;
      left: 0px;
      right: 0px;
      text-align: left;
      overflow-y: auto;
      line-height: 220%;
      overflow-x: hidden;
      img{
        max-width: 100%;
        margin-top: 10px;
      }
    }

</style>
