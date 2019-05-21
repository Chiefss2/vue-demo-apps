import Vue from 'vue'
import Vuex from 'vuex'
import cart from './modules/cart'
import products from './modules/products'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    userInfo: {
      email: 'chiefs2@163.com'
    }
  },
  modules: {
    cart,
    products
  }
})