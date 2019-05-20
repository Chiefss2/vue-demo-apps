<template>
  <div id="product-one">
    <h4>product-one</h4>
    <ul>
      <li v-for="product in saleProducts" :key="product.name">
        <span>{{ product.name }}</span>
        <span>{{ product.price }}</span>
      </li>
    </ul>
    <button @click="reducePrice">降价咯</button>
  </div>
</template>

<script>
export default {
  name: 'product-one',
  computed: {
    products(){
      return this.$store.state.products
    },
    saleProducts(){
      return this.$store.getters.sale
    }
  },
  methods: {
    reducePrice(){
      // mutation
      // this.$store.commit('reducePrice', {
      //   amount: 10
      // })
      // action
      this.$store.dispatch('reducePriceAsync', {
        amount: 10
      })
    }
  }
}
</script>
