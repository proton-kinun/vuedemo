import PageMain from '@/views/PageMain'

import {
  mdiHomeOutline,
  mdiAccountPlusOutline,
  mdiLoginVariant,
  mdiAccountGroupOutline
} from '@mdi/js'

const PageJoin = () => import(/* webpackChunkName: "page-join" */ '@/views/PageJoin')
const PageLogin = () => import(/* webpackChunkName: "page-login" */ '@/views/PageLogin')
const PageHeroes = () => import(/* webpackChunkName: "page-heroes" */ '@/views/PageHeroes')

export default [
  {
    path: '/',
    name: 'home',
    component: PageMain,
    title: 'Domov',
    icon: mdiHomeOutline
  },
  {
    path: '/join',
    name: 'join',
    component: PageJoin,
    title: 'Registrácia',
    icon: mdiAccountPlusOutline
  },
  {
    path: '/login',
    name: 'login',
    component: PageLogin,
    title: 'Prihlásenie',
    icon: mdiLoginVariant
  },
  {
    path: '/heroes',
    name: 'heroes',
    component: PageHeroes,
    title: 'SW Heroes',
    icon: mdiAccountGroupOutline
  }
]