import Vue from 'vue'
import router from '@/plugins/router'
import vuetify from '@/plugins/vuetify'
import Layout from '@/Layout'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

new Vue({
  router,
  vuetify,
  render: h => h(Layout)
}).$mount('#app')
