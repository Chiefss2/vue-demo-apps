import Vue from 'vue'
import Vuex from 'vuex'
import { reducePrice } from './mutations'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    products: [
      { name: '冬瓜', price: 200 },
      { name: '茄子', price: 140 },
      { name: '花生', price: 100 }
    ]
  },
  getters: {
    sale: (state) => {
      return state.products.map( (el) => {
        return {
          name: '$'+el.name+'$',
          price: el.price / 2 
        }
      })
    }
  },
  // mutations只能进行同步操作！！！
  // 最好提前在你的store中初始化好所有所需属性
  // 当需要在对象上添加新属性时：state.obj = { ...state.obj, newProp: 123 } 
  mutations: {
    [reducePrice]: (state, playload) => {
      state.products.forEach( (el) => {
        el.price -= playload.amount
      })
    }
  },
  // 执行异步操作，还可以组合action
  actions: {
    reducePriceAsync({ commit }, playload) {
      setTimeout(() => {
        commit(reducePrice, playload)
      }, 2000)
    }
  }
})