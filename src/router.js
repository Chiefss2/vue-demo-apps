import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from './components/Router'
import RouterChild from './components/RouterChild'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/foo',
      component: Router,
      name: '1'
    },
    {
      path: '/bar',
      component: Router,
      name: '2'
    },
    // 当 /user/:id匹配成功
    // Router会被渲染在App的<router-view/>中
    {
      path: '/user/:id',
      component: Router,
      name: '3',
      props: true,
      children: [
        {
          // 当 /user/:id/profile 匹配成功，
          // RouterChildrenDemo 会被渲染在 RouterDemo 的 <router-view/> 中
          path: 'profile',
          component: RouterChild,
          name: '3-1'
        },
        {
          path: 'posts',
          component: RouterChild
        }
      ]
    },
    {
      path: '/a', redirect: '/bar'
    },
    {
      path: '*',
      component: RouterChild,
      name: '404'
    }
  ]
})