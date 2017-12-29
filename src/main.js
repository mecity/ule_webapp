// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*本项目使用vue——webpack——vuex——mint-ui——axios*/
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/vuex/vuex'
import * as functionS from "@/assets/js/function";
/*这里可以放置一下公用的组件等等*/
import common from "@/global/common";

/*引入该插件可以屏蔽移动端点击事件延迟300毫秒bug*/
import FastClick from 'fastclick';

/*引入手势插件*/
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

/*引入初始化样式*/
import '@/assets/css/reset.css';
import '@/assets/css/common.css';






/*mint-ui插件引入*/
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import '@/assets/css/ule.less';

/*引入 mint-ui 懒加载*/
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);



/*路由跳转加载动画*/
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
/*路由跳转配置*/
Vue.use(NProgress)
NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 1000, showSpinner: false })

router.beforeEach((to,from,next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})


import { InfiniteScroll } from 'mint-ui';
Vue.use(InfiniteScroll);


// 在vue原型中添加$http方法等于axios,在组建中可以直接使用this.$http代表axios 不需要再引入axios插件了
Vue.prototype.$http = axios
Vue.prototype.$function = functionS;/*公共方法*/


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  // 组件创建前，把网站默认的数据都异步加载了
  beforeCreate(){
    this.$store.dispatch('getIndexdata');

    /*微信*/
    this.$store.dispatch('getWxconfig');
  }
})
