<template>
  <div class="router-child">
    <router-link to="/foo">go to foo</router-link>
    <br>
    <router-link to="/user/13">go to /user/13</router-link>
    <br>
    <router-link to="/user/12/profile">go to /user/12/profile</router-link>
    <br>
    <router-link to="/other">go to 404</router-link>
    <br>
    <router-link to="/a">go to 重定向到 bar</router-link>
    <br>
    <button @click="$router.push('foo')">go to foo</button>
    <p>id: {{id}}</p>
    <p>----{{ routerInfo }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'router-child',
  props: ['id'],
  computed: {
    routerInfo(){
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
