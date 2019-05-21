<template>
  <div id="shopping-cart">
    <h2>清单</h2>
    <p v-show="!products.length">请添加产品到购物车</p>
    <ul>
      <li 
        v-for="product in products"
        :key="product.id">
        {{ product.title }} - {{ product.price }} X {{ product.quantity }}
      </li>
    </ul>
    <p>合计：{{ total }}</p>
    <p><button :disabled="!products.length" @click="checkout(products)">结算</button></p>
    <p v-show="checkoutStatus">结算 {{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  name: 'shopping-cart',
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  }
}
</script>

<style scoped>

</style>

