import Vue from 'vue'
import Vuex from 'vuex'
import list from '@/data/list'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list
  },
  mutations: {
    appendTask: (state, newTask) => {
      state.list.push(newTask)
    }
  },
  actions: {
    addTask: ({ commit }, payload) => {
      commit('appendTask', payload)
    }
  },
  modules: {
  }
})
