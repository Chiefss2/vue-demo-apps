import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';
import { notification, Button } from 'ant-design-vue';

Vue.config.productionTip = false;
Vue.use(notification);
Vue.use(Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
