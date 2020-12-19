import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import sk from 'vuetify/lib/locale/sk'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { sk },
    current: 'sk'
  }
})
