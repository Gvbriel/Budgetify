<template>
  <div id="app">
    <div class="container-fluid">
      <template v-if="checkAuth()">
        <router-link to="/" class="mr-4">Hello {{ name }}!</router-link>
        <router-link to="/budget">Budget</router-link>
        |
        <router-link to="/cards">Cards</router-link>
        |
      </template>
      <template v-if="!checkAuth()">
        <router-link to="/login">Login</router-link>
        |
        <router-link to="/register">Register</router-link>
      </template>
      <template v-else>
        <a @click="logout()">
          <router-link to="/">Logout</router-link>
        </a>
      </template>
    </div>
    <div class="margin">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: 'app',
  components: {},
  methods: {
    ...mapGetters(['isAuthenticated']),
    checkAuth() {
      if (this.isAuthenticated())
        return true
      else
        return false
    },
    logout() {
      localStorage.clear()
      window.location.reload();
    }
  },
  mounted() {
    this.checkAuth()
  },
  data() {
    return {
      name: localStorage.getItem('name')
    }
  }
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
