<template>
  <div class="shopping-cart">
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} -- 单价：{{ product.price }} x 数量：{{ product.quantity }}
      </li>
    </ul>
    <br>
    <p>合计：{{ total }} 元</p>
    <button :disabled="!products.length" @click="checkout(products)">结算</button>
    <p v-show="checkoutStatus">提交 {{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

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
