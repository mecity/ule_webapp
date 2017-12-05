// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/*本项目使用vue——webpack——vuex——mint-ui——axios*/
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'


/*引入该插件可以屏蔽移动端点击事件延迟300毫秒bug*/
import FastClick from 'fastclick';

/*引入手势插件*/
import VueTouch from 'vue-touch'
Vue.use(VueTouch, {name: 'v-touch'})

/*mint-ui插件引入*/
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

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



// 在vue原型中添加$http方法等于axios,在组建中可以直接使用this.$http代表axios 不需要再引入axios插件了
Vue.prototype.$http = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
