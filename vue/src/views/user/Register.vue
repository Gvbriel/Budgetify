<template>
  <div class="container-fluid w-50">
    <el-form label-position="left" label-width="auto" :model="registerForm">
      <div class="d-flex flex-column">
        <el-form-item label="Name">
          <el-input v-model="registerForm.name"></el-input>
        </el-form-item>
      </div>

      <div class="d-flex flex-column">
        <el-form-item label="Surname">
          <el-input v-model="registerForm.surname"></el-input>
        </el-form-item>
      </div>

      <div class="d-flex flex-column">
        <el-form-item label="Email">
          <el-input v-model="registerForm.email"></el-input>
        </el-form-item>
      </div>

      <div class="d-flex flex-column">
        <el-form-item label="Password">
          <el-input type="password" v-model="registerForm.password"></el-input>
        </el-form-item>
      </div>

      <div class="d-flex flex-column">
        <el-form-item label="Confirm password">
          <el-input type="password" v-model="registerForm.password_confirmation"></el-input>
        </el-form-item>
      </div>

      <div class="d-flex flex-row-reverse">
        <el-button type="primary" @click="handleRegister(registerForm)">Register</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Register",
  data() {
    return {
      registerForm: {
        name: "",
        surname: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
    };
  },
  methods: {
    ...mapActions(['register']),
    handleRegister(form){
      this.register(form);
    }
  }
};
</script>

<style scoped>

</style>
