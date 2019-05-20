<template>
  <div id="app">
    <ProductOne/>
    <ProductTwo/>
  </div>
</template>

<script>
import ProductOne from '@/components/ProductOne.vue'
import ProductTwo from '@/components/ProductTwo.vue'
export default {
  name: 'app',
  components: {
    ProductOne,
    ProductTwo
  },
  data() {
    return {
    }
  }
}
</script>

<style>
</style>
