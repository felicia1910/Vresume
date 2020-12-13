import Vue from 'vue'
import Router from 'vue-router'
import Views from '@/views'

Vue.use(Router)

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
}

export default new Router({
  //mode: 'history',
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
        },
        {
          // default router page
          path: '/profile',
          name: 'profile',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/Profile')
        },
        {
          path: '/profile/:id',
          name: 'page',
          component: () => import(/* webpackChunkName: "Home" */ '@/views/ProfilePage')
        }
      ]
    }
  ]
})
