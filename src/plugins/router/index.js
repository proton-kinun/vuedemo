import Vue from 'vue'
import VueRouter from 'vue-router'

import PageMain from '@/views/PageMain'
import PageJoin from '@/views/PageJoin'
import PageLogin from '@/views/PageLogin'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: PageMain },
    { path: '/join', component: PageJoin },
    { path: '/login', component: PageLogin }
  ]
})
