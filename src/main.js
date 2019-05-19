import Vue from 'vue'
import router from './router'
import Resource from 'vue-resource'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(Resource)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
