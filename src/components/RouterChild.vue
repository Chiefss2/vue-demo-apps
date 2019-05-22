<template>
  <div class="router-child">
    {{ routerInfo }}
  </div>
</template>

<script>
export default {
  name: 'router-child',
  computed: {
    routerInfo() {
      const { fullPath, path, name, params, query, meta } = this.$route
      return {
        fullPath, path, name, params, query, meta
      }
    }
  }
}
</script>

<style>

</style>
