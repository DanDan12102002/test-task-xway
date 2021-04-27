import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    influencers: [],
    _loaded: false
  },
  mutations: {
    setInfluencers(state, influencers) {
      state.influencers = influencers
      setTimeout(() => {
        state._loaded = !state._loaded
      }, 200);
    },
    sort(state, {column, d}) {
      state.influencers.sort((a, b) => d * a[column] + b[column] * (-d))
    }
  },
})
