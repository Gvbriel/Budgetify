<template>
  <div class="container-fluid w-25">
    <el-form label-width="100px" :model="loginForm" action="#" @submit.prevent="login">

      <div class="d-flex flex-column">
        <el-form-item label="Email">
          <el-input v-model="loginForm.username"></el-input>
        </el-form-item>
      </div>

      <div class="d-flex flex-column">
        <el-form-item label="Password">
          <el-input v-model="loginForm.password"></el-input>
        </el-form-item>
      </div>

      <div class="d-flex flex-row-reverse">
        <el-button type="primary" @click="login('ruleForm')">Login</el-button>
      </div>

    </el-form>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import router from "@/router";

export default {
name: "Login",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    };
  },
  computed: mapGetters(['isAuthenticated']),
  methods: {
    ...mapActions(['retrieveToken']),
  login() {
    this.retrieveToken(this.loginForm)
    //TODO redirect after logging in and handle any errors
    if(this.isAuthenticated())
    {
      console.log('Authenticated!')
      router.push('/budget')
    }else {
      alert("Can't login!")
    }
  }
  }
}
</script>

<style scoped>

</style>