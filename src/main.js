import Vue from 'vue'
import router from '@/plugins/router'
import Layout from '@/Layout'

new Vue({
  router,
  render: h => h(Layout)
}).$mount('#app')
