import '@babel/polyfill'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/app.scss'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'bootstrap'

// setup
import './setup/setupAxios'
import './setup/setupFragment'
import './setup/setupBootstrap'

Vue.config.productionTip = false

//i18n
import i18n  from './setup/setupV18n'


new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')

