import { PRODUCTS } from '../mutation-type';
import request from '../../utils/request';

const state = {
  all: []
};

const getters = {};

const mutations = {
  [PRODUCTS.SET_PRODUCT_LIST](state, products) {
    state.all = products;
  },
  [PRODUCTS.DECREMENT_PRODUCT_INVENTORY](state, { id }) {
    const product = state.all.find(product => product.id === id);
    product.inventory--;
  }
};

const actions = {
  async getProductList({ commit }) {
    await request({
      url: '/api/shop',
      method: 'GET',
      params: { id: 'fone' }
    }).then(response => {
      commit(PRODUCTS.SET_PRODUCT_LIST, response.data);
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
