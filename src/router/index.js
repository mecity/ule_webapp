import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Login from '@/components/login/login'
import Member from '@/components/member/member'
import Feedback from '@/components/member/feedback'
import Score from '@/components/member/score'
import SetInfo from '@/components/member/set'
import Lineshow from '@/components/line/show'
import Newshow from '@/components/news/show'
import Newlist from '@/components/news/list'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
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
      path: '/newshow/:id',
      name: 'newshow',
      component: Newshow
    },
    {
      path: '/newlist',
      name: 'newlist',
      component: Newlist
    }
  ]
})
