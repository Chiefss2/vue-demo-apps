import Vue from 'vue'
import Vuex from 'vuex'
import products from './modules/products'
import cart from './modules/cart'

Vue.use(Vuex)

// state
const state = {
  userInfo: {
    email: 'chiefs2@163.com'
  }
}

export default new Vuex.Store({
  strict: true,
  state,
  modules: {
    products,
    cart
  }
})