<template>
  <div id="app-header">
    <div class="container">
      <nav class="navbar navbar-expand-md navbar-default">
        <a class="navbar-brand" href="#">用户管理系统</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <router-link :to="{name: 'users'}" class="nav-link">主页 <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'about'}" class="nav-link">关于我们</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'add'}" class="nav-link">添加用户</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-header'
}
</script>

<style scoped>
#app-header{
  border-bottom: 1px solid rgb(192, 192, 192);
  background-color: rgb(241, 241, 241);
}
.container .nav{
  padding: .5rem 0;
}
</style>
