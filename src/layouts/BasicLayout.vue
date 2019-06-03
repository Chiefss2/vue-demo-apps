<template>
  <div id="basicLayout">
    <h1>Account</h1>
    <p>{{ this.$store.state.userInfo.email }}</p>
    <hr />
    <h2>productlist</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from "../components/ProductList";
import ShoppingCart from "../components/ShoppingCart";
export default {
  name: "basicLayout",
  components: {
    ProductList,
    ShoppingCart
  }
};
</script>

<style>
</style>
