<template>
  <div id="shopping-cart">
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} -- 单价：{{ product.price }} x 数量：{{
          product.quantity
        }}
      </li>
    </ul>
    <br />
    <p>合计：{{ total }} 元</p>
    <a-button
      :disabled="!products.length"
      @click="checkout(products)"
      type="primary"
    >
      结算
    </a-button>
    <p v-show="checkoutStatus">{{ checkoutStatus }}</p>
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
export default {
  name: "shopping-cart",
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  },
  methods: {
    checkout(products) {
      this.$store.dispatch("cart/checkout", products);
    }
  }
};
</script>

<style scoped>
</style>
