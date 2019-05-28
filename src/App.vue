<template>
  <div id="app">
    <h1>用户账号</h1>
    <p>{{ this.$store.state.userInfo.email }}</p>
    <hr />
    <h2>产品清单</h2>
    <ProductList />
    <hr />
    <ShoppingCart />
  </div>
</template>

<script>
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
export default {
  name: "app",
  components: {
    ProductList,
    ShoppingCart
  }
};
</script>

<style>
</style>
