import PageMain from '@/views/PageMain'
import PageJoin from '@/views/PageJoin'
import PageLogin from '@/views/PageLogin'
import PageHeroes from '@/views/PageHeroes'

export default [
  {
    path: '/',
    name: 'main',
    title: 'Úvod',
    icon: 'mdi-home-outline',
    component: PageMain
  },
  {
    path: '/join',
    name: 'join',
    title: 'Registrovať',
    icon: 'mdi-account-plus-outline',
    component: PageJoin
  },
  {
    path: '/login',
    name: 'login',
    title: 'Prihlásiť',
    icon: 'mdi-login-variant',
    component: PageLogin
  },
  {
    path: '/heroes',
    name: 'heroes',
    title: 'SW Heroes',
    icon: 'mdi-account-group-outline',
    component: PageHeroes
  }
]