<template>
  <div id="users" class="container">
    <Alert v-if="alert" :msg="alert" />
    <h5 class="padge-">用户列表</h5>
    <input type="text" v-model="filterVal">
    <table class="table table-striped">
      <thead>
        <tr>
          <th>姓名</th>
          <th>电话</th>
          <th>邮箱</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in filterUsers(users, filterVal)" :key="user.id">
          <td>{{ user.name }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.email }}</td>
          <td><router-link :to="'/detail/' + user.id">详情</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Alert from './Alert'
export default {
  name: 'users',
  components: {
    Alert
  },
  data() {
    return {
      users: [],
      alert: false,
      filterVal: ''
    }
  },
  methods: {
    fetchUsers() {
      this.$http.get('http://localhost:3000/users')
        .then(response => {
          this.users = response.body
        })
    },
    filterUsers(users, val){
      return users.filter(el => {
        return el.name.match(val)
      })
    }
  },
  created(){
    if(this.$route.params.alert){
      this.alert = this.$route.params.alert
    }
    this.fetchUsers();
  },
  updated(){
    // this.fetchUsers();
  }
}
</script>

<style scoped>
#users{
  padding: .5rem 1rem;
}
</style>
