<template>
    <div>
      <HeaderVue :title="title">
        <router-link to="/" slot="right"><i class="iconfont icon-homepage c-fff"></i></router-link>
      </HeaderVue>
      <div class="show_box" v-if="pagedata.is_show">

        <div class="title bg_white bd-t">
          <div class="c-333 pr-10 f-16 lh22 pl-10 pt10 pb-10">{{title}}</div>
          <div class="f-12 mr_10 ml_10" @click="getfocus">
            <i class="iconfont icon-xiangqu c-666"></i>
            <p>收藏</p>
          </div>
        </div>
        <div class="bg_white pr-10 f-12 lh22 pl-10 pt10 pb-10 c-999" v-html="pagedata.trip_about">
        </div>

        <mt-cell :title="pagedata.memberName" class="mt_10" :to="{name:'member',params: { id: pagedata.memberId }}" is-link>
          <span>看TA主页</span>
          <img slot="icon" :src="pagedata.memberface" width="40" height="40">
        </mt-cell>
        <div class="bg_white pl-10 pt10 pb-10 pr-10 mt_10">
          旅行目的地：<cite class="f-14 c-ule-orange">{{pagedata.place}}</cite>
        </div>
        <div class="bg_white pl-10 pt10 pb-10 pr-10 mt_10">
          出发日期：<cite class="f-14 c-ule-orange"><cite class="pr-5">{{pagedata.start_time}}</cite>至<cite class="pl-10">{{pagedata.end_time}}</cite></cite>
        </div>
        <div class="bd-t mt_10 bg_white f-16 pl-10 pt10 pb-10 pr-10 c-333 c-ule-orange">
          线路介绍
        </div>
        <div class="show_detail f-14 clearfiex text-int28 bg_white pr-10 pl-10 pt10 pb-10" v-html="pagedata.show_detail">
        </div>
        <div class="bd-t mt_10 bg_white f-16 pl-10 pt10 pb-10 pr-10 c-333 c-ule-orange">
          提供的服务和费用说明
        </div>
        <div class="show_detail f-14 clearfiex text-int28 bg_white pr-10 pl-10 pt10 pb-10" v-html="pagedata.lines_info">
        </div>
        <div class="bd-t mt_10 bg_white f-16 pl-10 pt10 pb-10 pr-10 c-333 c-ule-orange">
          预约流程
        </div>
        <div class="show_detail f-14 clearfiex text-int28 bg_white pr-10 pl-10 pt10 pb-10" v-html="pagedata.reservation">
        </div>
        <div class="bd-t mt_10 bg_white f-16 pl-10 pt10 pb-10 pr-10 c-333 c-ule-orange">
          退款政策
        </div>
        <div class="show_detail f-14 clearfiex text-int28 bg_white pr-10 pl-10 pt10 pb-10" v-html="pagedata.refund">
        </div>
      </div>
      <div class="line_footer">
          <div class="price">
            <span>
              <cite class="pr-5 f-22 c-ule-orange">1380</cite><cite class="f-12 c-999">RMB/人</cite>
            </span>
            <span class="ml_10 c-999">
              请至少提前一天预约
            </span>
          </div>
          <button @click="closePop">发信预约</button>
      </div>

      <mt-popup
        v-model="popupVisible" position="center">
        <div class="pop_btn_box" style="margin-bottom: 60px;width: 100%;display: block">
          <mt-button size="small" type="default" class="ml_10" @click="closePop">取消</mt-button>
          <mt-button size="small" type="primary" class="mr_10" @click="closePop">确定</mt-button>
        </div>
      </mt-popup>


    </div>
</template>
<script>

    import { Cell,Popup,Button,MessageBox  } from 'mint-ui';
    export default {
        data() {
            return {
              id:'',
              title:'',
              pagedata:'',
              popupVisible:false,
            }
        },
        created(){
          this.id=this.$route.params.id;
          this.getpageData(this);
        },
        methods:{
          getpageData:async(that)=>{
            await that.$store.dispatch('showLinedetail',{id:that.id});
            that.pagedata=that.$store.getters.getLineshow;
            that.title=that.pagedata.title;
          },

          /*点击收藏*/
          addfocus(){
            alert(this.id)
          },

          /*添加关注*/
          getfocus(){

            /*判断是否登录*/
            let isLogin=this.$function.getStore('userinfo');
            if(isLogin){
              alert('已经登录');
            }else{
              MessageBox.confirm('收藏此路线必须登录?','温馨提示',
              {
                showCancelButton: true,
                confirmButtonHighlight:true,
                cancelButtonText:'知道了',
                confirmButtonText:'去登录'
              }).then(action => {

                this.$router.push({name:'login'});

              });

            }
          },
          closePop(){
            this.popupVisible=true;
          }
        },
        components: {
          'mt-cell':Cell,
          'mt-popup':Popup,
          'mt-button':Popup,
        }

    }
</script>
<style scoped lang="less">
  .mint-cell-title{
    img{
      border-radius: 5px;
    }
    span{
      font-size: 14px;
    }
  }
  .dis_flex(){
    display: flex;
    display: -webkit-flex;
    align-items: center;
  }
  .pop_btn_box{
    height:300px;
  }
  .show_box{
    box-sizing: border-box;
    position: fixed;
    top:40px;
    bottom: 60px;
    left: 0px;
    right: 0px;
    text-align: left;
    overflow: auto;
    line-height: 220%;
    overflow-x: hidden;
    .title{
      .dis_flex();
      justify-content: space-between;
      div{
        box-sizing: border-box;
      }
      div:first-child{
        flex: 1;
      }
    }
    .iconfont{
      vertical-align: middle;
    }


  }



.line_footer{
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  box-sizing: border-box;
  z-index: 9999;
  left: 0px;
  right:0px;
  bottom: 0px;
  height: 60px;
  background: #fff;
  flex-flow: row nowrap;
  .price{
    border-top: 1px solid #eee;
    padding-right: 20px;
    padding-left: 10px;
    height: 100%;
    display: flex;
    flex: 1;
    text-align: left;
    line-height: 59px;
  }
  button{
    height: 60px;
    color: white;
    font-size: 15px;
    flex: 0.3;
    border: none;
    background-image:-webkit-linear-gradient(45deg, #f18155, #e15822);
    background-image:linear-gradient(45deg, #f18155, #e15822);
  }
}

</style>
<style lang="less">
  .show_detail
  {
    font-size: 14px;
    color: #333;
  }
  .show_detail > img{
    display: block;
    box-sizing: border-box;
    max-width: 100%;
    text-indent: 0px;
    clear: both;
    margin: 0 auto;
  }
  .show_detail >p >img{
    display: block;
    box-sizing: border-box;
    max-width: 100%;
    text-indent: 0px;
    clear: both;
    margin: 0 auto;
  }

</style>
