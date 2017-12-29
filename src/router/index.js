import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/index/home'
import Login from '@/components/login/login'
import Member from '@/components/member/member'
import Feedback from '@/components/member/feedback'
import Score from '@/components/member/score'
import SetInfo from '@/components/member/set'
import Lineshow from '@/components/line/show'
import Linelist from '@/components/line/list'
import Newshow from '@/components/news/show'
import Newlist from '@/components/news/list'
import Notfind from '@/commonpage/404'
import Default from '@/components/index/default'
Vue.use(Router)
export default new Router({
  // hashbang: false,
  // mode: 'history',
  // base:'/webapp/',/*注意这里,如果你的项目打包之后是要放在域名的二级目录下 则这里是目录名，不然路由无法匹配，这是在mode：histroy的情况下 这里必须设置*/
  routes: [
    {
      path: '/',
      redirect: {name:'home'}/*重定向到home*/
    },
    {
      path: '/home',
      name: 'home',
      components:{
        default:Home,
      },
      children:[
        {path:'',component:Default},/*给router-view默认一个组件*/
        {name:'default',path:'default',component:Default},
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/member',
      name: 'member',
      component: Member
    },
    {
      path: '/set',
      name: 'set',
      component: SetInfo
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    },
    {
      path: '/lineshow/:id',
      name: 'lineshow',
      component: Lineshow
    },
    {
      path: '/linelist',
      name: 'linelist',
      component: Linelist
    },
    {
      path: '/newshow/:id',
      name: 'newshow',
      component: Newshow
    },
    {
      path: '/newlist',
      name: 'newlist',
      component: Newlist
    },
    {
      // 404匹配
      name:'redirect',
      path: '*',
      component: Notfind
    }

  ]
})
