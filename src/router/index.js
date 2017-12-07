import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index/index'
import Login from '@/components/login/login'
import Member from '@/components/member/member'
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
    }
  ]
})
