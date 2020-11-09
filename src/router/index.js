import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      component: Views,
      meta: { requiresAuth: true },
      children: [
        {
          // default router page
          path: '',
          name: 'home',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/Home')
        }
      ]
    }
  ]
})
