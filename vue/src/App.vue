<template>
  <div id="app">
    <div class="container">
      <router-link to="/budget">Budget</router-link>
      |
      <router-link to="/cards">Cards</router-link>
      |
      <router-link to="/login">Login</router-link>
      |
      <router-link to="/register">Register</router-link>
    </div>
    <div class="margin">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>


export default {
  name: 'app',
  components: {}
}
</script>

<style>
@import '~bootstrap/dist/css/bootstrap.css';


.margin {
  margin-top: 5%;
}

.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 60vh;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 15px;
}
</style>
