import shop from '../../api/shop'
import { PRODUCTS } from '../mutation-types'

// initial module

// state
const state = {
  all: []
}

// getters
const getters = {  }

// mutations
const mutations = {
  // 设置所有商品信息
  [PRODUCTS.SET_PRODUCT_LIST] (state, products) {
    state.all = products
  },

  // 某一商品数量-1
  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY] (state, {id}) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

// actions
const actions = {
  getAllProducts ({ commit }) {
    shop.getProducts((products) => {
      commit(PRODUCTS.SET_PRODUCT_LIST, products)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}