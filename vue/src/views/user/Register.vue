<template>
  <div class="container-fluid w-25">
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
          <el-input v-model="registerForm.password"></el-input>
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
name: "Register",
  data() {
    return {
      registerForm: {
        name: '',
        surname: '',
        email: '',
        password: ''
      }
    };
  }
}
</script>

<style scoped>

</style>