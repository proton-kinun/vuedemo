import PageMain from '@/views/PageMain'
import PageJoin from '@/views/PageJoin'
import PageLogin from '@/views/PageLogin'
import PageHeroes from '@/views/PageHeroes'

export default [
  { path: '/', component: PageMain },
  { path: '/join', component: PageJoin },
  { path: '/login', component: PageLogin },
  { path: '/heroes', component: PageHeroes }
]