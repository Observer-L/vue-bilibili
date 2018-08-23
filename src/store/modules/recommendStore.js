import {
  recommendApi
} from 'api'
import * as TYPE from '../actionType/recommendType'

const state = {
  specialRecommend: {}
}

const getters = {
  specialRecommend: state => state.specialRecommend
}

const actions = {
  getSpecialRecommend ({
    commit,
    state,
    rootState
  }) {
    rootState.requesting = true
    commit(TYPE.RECOMMEND_REQUEST)
    recommendApi.recommend().then((response) => {
      rootState.requesting = false
      commit(TYPE.RECOMMEND_SUCCESS, response)
    }, (error) => {
      rootState.requesting = false
      commit(TYPE.RECOMMEND_FAILURE, error)
    })
  }
}

const mutations = {
  [TYPE.RECOMMEND_REQUEST] (state) {},
  [TYPE.RECOMMEND_SUCCESS] (state, response) {
    state.specialRecommend = response.list
  },
  [TYPE.RECOMMEND_FAILURE] (state) {}
}

export default {
  state,
  getters,
  actions,
  mutations
}
