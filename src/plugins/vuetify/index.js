import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import sk from 'vuetify/es5/locale/sk'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { sk },
    current: 'sk'
  }
})
