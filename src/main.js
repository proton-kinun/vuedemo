import Vue from 'vue'
import auth0 from 'auth0-js'
import router from '@/plugins/router'
import vuetify from '@/plugins/vuetify'
import Layout from '@/Layout'

Vue.prototype.$auth = new auth0.WebAuth({
  domain:       'proton-kinun.eu.auth0.com',
  clientID:     'Tb9FwmuvJTZY3haYweOlzBCEwZfQ242R'
})

new Vue({
  router,
  vuetify,
  render: h => h(Layout)
}).$mount('#app')
