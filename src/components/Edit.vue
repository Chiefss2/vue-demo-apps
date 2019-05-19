<template>
  <div id="edit">
    <div class="container">
      <form @submit.prevent="editUser">
        <h5>用户信息</h5>
        <label>姓名</label>
        <input type="text" v-model="user.name">
        <hr>
        <label>电话</label>
        <input type="text" v-model="user.phone">
        <hr>
        <label>邮箱</label>
        <input type="text" v-model="user.email">
        <hr>
        <label>年龄</label>
        <input type="text" v-model="user.age">
        <hr>
        <label>所属公司</label>
        <input type="text" v-model="user.companyId">
        <hr>
        <button type="submit">确认修改</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {
      user: {}
    }
  },
  methods: {
    fetchUser(){
      this.$http.get('http://localhost:3000/users/' + this.$route.params.id)
        .then(response => {
          window.console.log(response)
          this.user = response.body
        })
    },
    editUser(){
      let tmpUser = {
        name: this.user.name,
        phone: this.user.phone,
        email: this.user.email,
        age: this.user.age,
        companyId: this.user.companyId
      }
      this.$http.put('http://localhost:3000/users/' + this.$route.params.id, tmpUser)
        .then(() => {
          this.$router.push({
              name: 'users',
              params: { alert: '用户信息更新成功' }
            })
        })
    }
  },
  created(){
    this.fetchUser()
  }
}
</script>
