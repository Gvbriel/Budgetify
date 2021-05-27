<template>
  <div class="container-fluid w-25">
    <el-form label-width="100px" :model="loginForm">

      <div class="d-flex flex-column">
        <el-form-item label="Email">
          <el-input v-model="loginForm.email"></el-input>
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
export default {
name: "Login",
  data() {
    return {
      loginForm: {
        email: '',
        password: ''
      }
    };
  }
}
</script>

<style scoped>

</style>