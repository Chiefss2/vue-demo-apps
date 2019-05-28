<template>
  <div class="product-list">
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.title }} -- 单价：{{ product.price }} -- 库存：{{
          product.inventory
        }}
        <a-button
          :disabled="!product.inventory"
          @click="addProductToCart(product)"
          type="primary"
        >
          加入购物车
        </a-button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "product-list",
  data() {
    return {};
  },
  mounted() {
    this.getProductList();
  },
  computed: mapState({
    products: state => state.products.all
  }),
  methods: {
    getProductList() {
      this.$store.dispatch("products/getProductList");
    },
    ...mapActions("cart", ["addProductToCart"])
  }
};
</script>

<style scoped>
li {
  margin-bottom: 10px;
}
</style>
