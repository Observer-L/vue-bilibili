import Vue from 'vue'
import Vuex from 'vuex'

import bannerStore from './modules/bannerStore'
import rankStore from './modules/rankStore'

Vue.use(Vuex)

const state = {
  requesting: false,
  error: {}
}

const getters = {
  requesting: state => state.requesting,
  error: state => state.error
}

export default new Vuex.Store({
  state,
  getters,
  modules: {
    bannerStore,
    rankStore
  }
})
