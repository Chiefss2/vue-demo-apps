import { PRODUCTS, CART } from '../mutation-types'
import shop from '../../api/shop'

// initial module
// state
const state = {
  items: [],
  checkoutStatus: null
}

// getters
const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map( ({id, quantity}) => {
      const cartProduct = rootState.products.all.find(product => product.id === id)
      return {
        title: cartProduct.title,
        price: cartProduct.price,
        quantity
      }
    })
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// mutations
const mutations = {
  [CART.SET_CART_ITEMS] (state, {items}) {
    state.items = items
  },

  // 购物车加入某一商品信息 (cart里面只存quantity和id, title,price去rootState里面查找即可)
  [CART.PUSH_PRODUCT_TO_CART] (state, {id}) {
    state.items.push({
      id,
      quantity: 1
    })
  },

  // 购物车里的某一商品数量+1
  [CART.INCREMENT_ITEM_QUANTITY] (state, {id}) {
    const cartItem = state.items.find(item => item.id === id)
    cartItem.quantity++
  },

  // 设置结算状态
  [CART.SET_CHECKOUT_STATUS] (state, status) {
    state.checkoutStatus = status
  }
}

// actions
const actions = {
  addProductToCart ({ state, commit }, product) {
    if(product.inventory > 0) {
      const cartItem = state.items.find(item => item.id === product.id)
      if(!cartItem) {
        commit(CART.PUSH_PRODUCT_TO_CART, product)
      } else {
        commit(CART.INCREMENT_ITEM_QUANTITY, product)
      }
      // 调用module-products里的把仓库的该商品的数量-1
      commit(`products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`, {id: product.id}, { root: true })
    }
  },

  // 结算购物车
  checkout ({ state, commit }, products) {
    // 提交前先保存购物车快照
    const savedCartItems = [...state.items]
    commit(CART.SET_CHECKOUT_STATUS, null)
    // 清空购物车
    commit(CART.SET_CART_ITEMS, { items: [] })
    // 提交
    shop.buyProducts(
      products,
      () => commit(CART.SET_CHECKOUT_STATUS, 'checkout successful'),
      () => {
        commit(CART.SET_CHECKOUT_STATUS, 'checkout failed')
        // 提交结算失败，购物车内容应该回滚
        commit(CART.SET_CART_ITEMS, savedCartItems)
      }
    )
    
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}