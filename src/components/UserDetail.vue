<template>
  <div id="userDetail" class="container">
    <router-link :to="{name: 'users'}">返回</router-link>
    {{ user.name }}
    <router-link :to="'/edit/' + user.id">编辑</router-link>
     <button @click="deleteUser(user.id)">删除</button>
  </div>
</template>

<script>
export default {
  name: 'userDetail',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    fetchUser(id){
      this.$http.get('http://localhost:3000/users/' + id)
        .then(response => {
          this.user = response.body
        })
    },
    deleteUser(id){
      this.$http.delete('http://localhost:3000/users/' + id)
        .then(() => {
          this.$router.push({
            name: 'users',
            params: {
              alert: '用户删除成功'
            }
          })
        })
    }
  },
  created(){
    this.fetchUser(this.$route.params.id)
  }
}
</script>
