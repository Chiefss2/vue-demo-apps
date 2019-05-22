<template>
  <div class="product-list">
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >
        {{ product.title }} -- 单价：{{ product.price }} -- 库存：{{ product.inventory }}
        <button :disabled="!product.inventory" @click="addProductToCart(product)">加入购物车</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'product-list',
  computed: mapState({
    products: state => state.products.all
  }),
  methods: mapActions('cart', [
      'addProductToCart'
  ]),
  created () {
    this.$store.dispatch('products/getAllProducts')
  }
}
</script>
