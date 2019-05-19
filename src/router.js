import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'users',
      component: () => import('./components/Users.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/About.vue')
    },
    {
      path: '/add',
      name: 'add',
      component: () => import('./components/Add.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./components/UserDetail.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('./components/Edit.vue')
    }
  ]
})