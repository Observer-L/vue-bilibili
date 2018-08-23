import Vue from 'vue'
import Vuex from 'vuex'

import bannerStore from './modules/bannerStore'
import rankStore from './modules/rankStore'
import promoteStore from './modules/promoteStore'
import liveStore from './modules/liveStore'
import onlineStore from './modules/onlineStore'
import contentStore from './modules/contentStore'
import recommendStore from './modules/recommendStore'

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
    rankStore,
    promoteStore,
    liveStore,
    onlineStore,
    contentStore,
    recommendStore
  }
})
