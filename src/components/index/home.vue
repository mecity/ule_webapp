<template>
  <div class="home_box">
    <!--topTool-->
    <div :class="{index_header:IndexdefaulutClass,index_header_bg:IndexActiveClass}">
      <div class="left_list_btn"></div>
      <div class="search_index">
        <input type="search" name="search_index" placeholder="输入关键词来查找相关地接导游">
      </div>
      <div class="member_btn"></div>
    </div>


    <!--banner条-->
    <div class="swpie_box" v-on:touchmove.stop>
      <mt-swipe :auto="4000">
        <mt-swipe-item v-for="(value,index) in bannerDefaultlist" :key='index'>
          <a :href="value.herf" >
            <img v-bind:title="value.name"  v-lazy.container="value.src">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="inder_menu" ref="inder_menu">
      <div class="quickMenu">
        <router-link :to="{name:'member'}">
          <i class="iconfont icon-activity_fill"></i>
          <p>发布信息</p>
        </router-link>
        <a href="#">
          <i class="iconfont icon-feedback_fill"></i>
          <p>悠乐幇</p>
        </a>
        <a href="#">
          <i class="iconfont icon-businesscard_fill"></i>
          <p>我的悠乐</p>
        </a>
        <a href="#">
          <i class="iconfont icon-select_fill"></i>
          <p>我的关注</p>
        </a>
      </div>
      <!--最新新闻-->
      <div class="latestNews">
        <ul :style="{ top }">
          <router-link :to="{name:'newshow',params: { id: value.id }}" v-for="(value,index) in newsDefaultlist" :key="value.id">{{value.title}}</router-link>
        </ul>
      </div>
    </div>

    <!--最新地接-->
    <guideIndex :newslist="checkIndexMember()"></guideIndex>

    <!--搭伴游-->
    <lineIndex :hotlist="checkIndexhotline()">
      <p slot="title"><span class="c-333 f-16">热门地接线路</span><router-link :to="{name:'linelist'}">更多</router-link></p>
    </lineIndex>
    <FooterVue></FooterVue>
  </div>
</template>
<script>
  import { Swipe, SwipeItem} from 'mint-ui';
  import guideIndex from '@/commonpage/guide';
  import lineIndex from '@/commonpage/linelist';
  import face from "@/assets/img/face.jpg";
  import banner from '@/assets/img/banner.jpg';

  export default {

      data(){
        return {
          IndexdefaulutClass:true,
          IndexActiveClass:false,
          bannerDefaultlist:[
            {name:'01',src:banner,herf:'http://www.baidu.com'},
            {name:'02',src:banner,herf:'http://www.sina.com.cn'},
            {name:'03',src:banner,herf:'http://www.163.com'},
            {name:'04',src:banner,herf:'http://www.163.com'},
            {name:'05',src:banner,herf:'http://www.163.com'}
          ],
          newsDefaultlist:[],
          activeIndex: 0,
          loading:false,
        }
      },

    created(){
      this.newsDefaultlist=this.getIndexdata();

    },
    mounted() {

      setInterval(this.loopNewlist, 2000);

      /*让顶部导航条到一定距离增加背景色*/
      let that=this;
      window.addEventListener('scroll',function(e){

        if(that.$refs.inder_menu){
          var domtest=that.$refs.inder_menu.getBoundingClientRect().top;

          if(domtest<40){
            that.IndexActiveClass=true;

          }else{
            that.IndexActiveClass=false;
          }
        }

      },true)

    },

    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item':SwipeItem,
      'guideIndex':guideIndex,
      'lineIndex':lineIndex,
    },
    computed: {
      top() {
        return - this.activeIndex * 40 + 'px';
      },

      /*监控新闻列表的更新*/
      vueNewlist(){
        return this.$store.getters.getIndexnewsdata;
      },

      /*微信配置*/
      vuexGetterwxconfig(){
        return this.$store.getters.getWexinconfig;
      }


    },

    watch: {

      /*监听vuex里的getters的indexNews数据是否已经挂载成功*/
      'vueNewlist': function (newvalue, oldvalue) {
        if (newvalue) {
          this.newsDefaultlist = newvalue;
        }
      },

      'vuexGetterwxconfig': function (newvalue, oldvalue) {
        if (newvalue) {
          this.weixinconfig = newvalue;
          wx.config({
            debug: true,
            appId: this.weixinconfig.appId,
            timestamp: this.weixinconfig.timestamp,
            nonceStr: this.weixinconfig.nonceStr,
            url: this.weixinconfig.url,
            signature: this.weixinconfig.signature,
            jsApiList: [
              // 所有要调用的 API 都要加到这个列表中
              'onMenuShareTimeline',
              'onMenuShareAppMessage',
              'onMenuShareQQ',
              'onMenuShareWeibo',
              'onMenuShareQZone',
              'checkJsApi'
            ]
          });
          wx.ready(function () {
            // 在这里调用 API
            wx.onMenuShareTimeline({
              title: '二位无群', // 分享标题
              link: 'http://m.u-le.net/webapp/index.html', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
              imgUrl: '', // 分享图标
              success: function () {
                // 用户确认分享后执行的回调函数
                alert('成功')
              },
            })


          })

          wx.error(function(res){

            console.info('错误信息',res)
            // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。

          });

        }

      },
    },
    methods:{

      /*最新通知上滚*/
      loopNewlist(){

        if(this.activeIndex < this.newsDefaultlist.length-1) {
          this.activeIndex += 1;
        } else {
          this.activeIndex = 0;
        }
      },

      checkIndexhotline(){
        return this.$store.state.indexHotline
      },

      checkIndexMember(){
        return this.$store.state.indexMember
      },
      getIndexdata(){
        return this.$store.getters.getIndexnewsdata;
      },
      getGettersWx(){
        return this.$store.getters.getWexinconfig;
      }
    }



  }
</script>
<style lang="less" scoped>
.home_box{
  position: fixed;
  top:0px;
  left: 0px;
  right:0px;
  bottom:55px;
  overflow-y: auto;
}

@inputPlacehpleder:rgba(255,255,255,1);
.bggoround(){
  background-image:linear-gradient(180deg, #1fcca9, #37c6c0);
  background-image:-webkit-gradient(linear, left top, left bottom, from(#1fcca9), to(#37c6c0));
}


.index{
  font-size: 16px;
  height: 100%
}

.content{
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 55px;
  overflow-y: auto;
}
.index_header_bg{
  background-color:#1fcca9;
}
.index_header{
  position: fixed;
  left: 0px;
  top: 0px;
  right: 0px;
  height: 40px;
  z-index: 9999;
  display: flex;
  display: -webkit-flex;
  -moz-transition:background-color .5s ease;
  -webkit-transition: background-color .5s ease;
  -o-transition: background-color .5s ease;
  transition: background-color .5s ease;
  transform: translateZ(0);
  -webkit-transform: translateZ(0);/*解决移动端fiex跳动*/

  .left_list_btn{
    width: 50px;
    height: 40px;
    background: url('~@/assets/img/icon/left_list_icon.png') no-repeat center;
    background-size: 40%;
    cursor: pointer;
  }
  .member_btn{
    width: 50px;
    height: 40px;
    background: url('~@/assets/img/icon/member_icon.png') no-repeat center;
    background-size: 40%;
    cursor: pointer;
  }
  .search_index{
    flex: 1;
    height: 40px;
    box-sizing: border-box;
    padding: 5px 15px;
    input{
      display: block;
      box-sizing: border-box;
      color: white;
      width: 100%;
      height: 100%;
      padding: 0px 8px;
      padding-left: 25px;
      border-radius: 3px;
      background: rgba(255,255,255,0.2) url('~@/assets/img/icon/search_icon.png') no-repeat 8px center;
      background-size: auto 50%;
      outline: none;
      font-size: 1rem;
    }
    input::-webkit-input-placeholder{
      color: @inputPlacehpleder;
    }
    input::-moz-placeholder{
      color: @inputPlacehpleder;
    }
    input:-moz-placeholder{
      color: @inputPlacehpleder;
    }
    input:-ms-input-placeholder{
      color: @inputPlacehpleder;
    }
  }
}


.swpie_box{
  height: 220px;
  position: relative;
  .mint-swipe .mint-swipe-items-wrap .mint-swipe-item a{
    display: block;
    height: 100%;
    overflow-y: hidden;
  }
  .mint-swipe .mint-swipe-items-wrap .mint-swipe-item a img{
    display: block;
    width: 100%;
    margin: 0px auto;
  }


}


.inder_menu{
  height: 120px;
  background: #fff;
  margin: 0px 10px;
  margin-top: -40px;
  position: relative;
  z-index: 999;
  border-radius: 3px;
  -webkit-border-radius:3px;
  -moz-border-radius:3px;
  overflow: hidden;
  box-shadow: 0px 2px 2px rgba(238,238,238,0.8);
  .quickMenu{
    .bggoround;
    height: 80px;
    display: flex;
    display: -webkit-flex;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    a{
      flex:1;
      height: 100%;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      align-items: center;
      align-content: center;
      justify-content:center;
      color: white;
      i{
        font-size: 28px!important;
      }
      p{
        font-size: 13px;
      }
    }

  }

  .latestNews{
    height: 40px;
    padding-left: 65px;
    background: url('~@/assets/img/icon/new_help_text.png') no-repeat 8px center;
    background-size: auto 50%;
    overflow-y: hidden;
    ul{
      position: relative;
      transition: top 1s;
      display: block;
      a{
        display: block;
        line-height: 40px;
        height: 40px;
        box-sizing: border-box;
        font-size: 13px;
        line-height: 40px;
        text-align: left;
        padding: 0px 10px;
        white-space: nowrap;
        word-break: keep-all;
        text-overflow: ellipsis;
        color: #666;
        overflow: hidden;
      }
    }
  }


}

</style>
