import { CART, PRODUCTS } from '../mutation-type';
import request from '../../utils/request';

const state = {
  items: [],
  checkoutStatus: null
};

const getters = {
  cartProducts: (state, getters, rootState) => {
    return state.items.map(({ id, quantity }) => {
      const cartProduct = rootState.products.all.find(
        product => product.id === id
      );
      return {
        title: cartProduct.title,
        price: cartProduct.price,
        quantity
      };
    });
  },
  cartTotalPrice: (state, getters) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity;
    }, 0);
  }
};

const mutations = {
  [CART.PUSH_PRODUCT_TO_CART](state, { id }) {
    state.items.push({
      id,
      quantity: 1
    });
  },
  [CART.INCREMENT_ITEM_QUANTITY](state, { id }) {
    const cartItem = state.items.find(item => item.id === id);
    cartItem.quantity++;
  },
  [CART.SET_CART_ITEMS](state, { items }) {
    state.items = items;
  },
  [CART.SET_CHECKOUT_STATUS](state, status) {
    state.checkoutStatus = status;
  }
};

const actions = {
  addProductToCart({ commit, state }, product) {
    const cartItem = state.items.find(item => item.id === product.id);
    if (cartItem) {
      commit(CART.INCREMENT_ITEM_QUANTITY, product);
    } else {
      commit(CART.PUSH_PRODUCT_TO_CART, product);
    }
    commit(
      `products/${PRODUCTS.DECREMENT_PRODUCT_INVENTORY}`,
      { id: product.id },
      { root: true }
    );
  },
  checkout({ commit, state }, products) {
    window.console.log(products);
    // 保存购物车快照
    const savedCartItems = [...state.items];
    // 清除状态
    commit(CART.SET_CHECKOUT_STATUS, null);
    // 清空购物车
    commit(CART.SET_CART_ITEMS, { items: [] });
    request({
      url: '/api/cart',
      method: 'POST'
    })
      .then(response => {
        window.console.log(response);
        commit(CART.SET_CHECKOUT_STATUS, response.data);
      })
      .catch(error => {
        commit(CART.SET_CHECKOUT_STATUS, error);
        // 结算失败的时候购物车内容回滚
        commit(CART.SET_CART_ITEMS, savedCartItems);
      });
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
