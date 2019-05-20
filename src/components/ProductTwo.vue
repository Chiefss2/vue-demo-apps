<template>
  <div id="product-two">
    <h4>product-two</h4>
    <ul>
      <li v-for="product in products" :key="product.name">
        <span>{{ product.name }}</span>
        <span>{{ product.price }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'product-two',
  computed: {
    products() {
      return this.$store.state.products
    }
  }
}
</script>
