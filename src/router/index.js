import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Login from '@/components/login/login'
import Member from '@/components/member/member'
import Feedback from '@/components/member/feedback'
import SetInfo from '@/components/member/set'
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
    }
  ]
})
