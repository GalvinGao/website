import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import settings from './modules/settings'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      key: "site-state",
      paths: [
        "settings"
      ],
    }),
  ],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    settings
  }
})
