import shop from '../../api/shop'
import { PRODUCTS } from '../mutations'

// initial state
const state = {
  all: []
}

// getters
const getters = {}

// mutations
const mutations = {
  [PRODUCTS.SET_PRODUCTS] (state, products) {
    state.all = products
  },
  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY] (state, { id }) {
    const product = state.all.find(product => product.id === id)
    product.inventory--
  }
}

// actions
const actions = {
  getAllProducts ({commit}) {
    shop.getProducts(products => {
      commit(PRODUCTS.SET_PRODUCTS, products)
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