import Vue from 'vue'
import router from '@/plugins/router'
import vuetify from '@/plugins/vuetify'
import Layout from '@/Layout'

new Vue({
  router,
  vuetify,
  render: h => h(Layout)
}).$mount('#app')
