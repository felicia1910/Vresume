import Vue from 'vue'
import Vuex from 'vuex'

// events
import Profile from './Profile/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    lang: null  // 存放使用者選用的語系
  },
  mutations: {
    // 切換語系設定
    setLang (state, value) {
      state.lang = value;
    }
  },
  actions: {},
  modules: {},
  modules: {
    Profile
  }
})