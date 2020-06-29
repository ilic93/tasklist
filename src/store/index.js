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
    },
    finishedTask: (state, deleteIndex) => {
      state.list.splice(deleteIndex, 1)
    },
    updateTask: (state, { index, changedTask }) => {
      state.list[index].task = changedTask
    }
  },
  actions: {
    addTask: ({ commit }, payload) => {
      commit('appendTask', payload)
    },
    deleteTask: ({ commit }, payload) => {
      commit('finishedTask', payload)
    },
    changeTask: ({ commit }, payload) => {
      commit('updateTask', payload)
    }
  },
  modules: {
  }
})
