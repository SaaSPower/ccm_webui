import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'

import system from './modules/system'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  actions,
  getters,
  modules: {
    system
  }
})
