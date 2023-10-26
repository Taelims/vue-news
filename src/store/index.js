import Vuex from 'vuex'
import Vue from 'vue'

import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)

export  const store = new Vuex.Store({
  state :{
    news : [],
    ask : [],
    jobs: [],
    user: {},
    item: {},
    list : [],
  },
  getters :{
    fetchedAsk(state) {
      return state.ask
    }
  },
  mutations,
  actions,
})