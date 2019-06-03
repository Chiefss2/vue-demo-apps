import Vue from 'vue';
import Router from 'vue-router';
import NotFound from './views/404.vue';
import Forbidden from './views/403.vue';
import { isLogin } from './utils/auth';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () =>
        import(/* webpackChunkName: "layout" */ './layouts/BasicLayout.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "layout" */ './layouts/userLayout/Login.vue')
    },
    {
      path: '/403',
      name: '403',
      component: Forbidden
    },
    {
      path: '*',
      name: '/404',
      component: NotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  alert(to.path);
  // 没有登录且不在登录页
  alert(isLogin);
  if (!isLogin() && to.path !== '/login') {
    alert('请先登录');
    next({
      path: '/login'
    });
  }
  next();
});

export default router;
