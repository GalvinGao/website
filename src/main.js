import Vue from 'vue'
import VueMeta from 'vue-meta'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import i18n from './i18n'

Vue.config.productionTip = false

Vue.use(VueMeta)

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App),
  mounted () {
    // Prerender stuff
    if (document) {
      document.dispatchEvent(new Event('prerender-vue-mounted'))
    }
  }
}).$mount('#app')
