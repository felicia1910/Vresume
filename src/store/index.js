import Vue from 'vue'
import Vuex from 'vuex'

// events
import Profile from './Profile/index'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {},
  // mutations: {},
  // actions: {},
  // getters:{},
  modules: {
    Profile
  }
})
