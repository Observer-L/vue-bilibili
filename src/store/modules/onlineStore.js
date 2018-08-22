import {
  onlineApi
} from 'api'
import * as TYPE from '../actionType/onlineType'

const state = {
  online: {}
}

const getters = {
  online: state => state.online
}

const actions = {
  online ({
    commit,
    state,
    rootState
  }) {
    rootState.requesting = true
    commit(TYPE.ONLINE_REQUEST)
    onlineApi.online().then((response) => {
      rootState.requesting = false
      commit(TYPE.ONLINE_SUCCESS, response)
    }, (error) => {
      rootState.requesting = false
      commit(TYPE.ONLINE_FAILURE, error)
    })
  }
}

const mutations = {
  [TYPE.ONLINE_REQUEST] (state) {},
  [TYPE.ONLINE_SUCCESS] (state, response) {
    state.online = response.data
  },
  [TYPE.ONLINE_FAILURE] (state) {}
}

export default {
  state,
  getters,
  actions,
  mutations
}
