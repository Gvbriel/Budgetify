<template>
  <div class="container-fluid">
    <div class="w mx-auto">

      <el-form ref="form" :model="sizeForm" label-width="120px" size="mini">

        <div class="row">
          <div class="col">
            <el-form-item label="Type">
              <el-radio-group v-model="sizeForm.resource" class="float-left mt-2" size="medium">
                <el-radio label="Spending"></el-radio>
                <el-radio label="Income"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <el-form-item label="Title">
              <el-input v-model="sizeForm.name"></el-input>
            </el-form-item>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <el-form-item label="Description" prop="desc">
              <el-input type="textarea" v-model="sizeForm.desc"></el-input>
            </el-form-item>
          </div>
        </div>

        <div class="row">



            <el-form-item label="Choose your card" prop="card" class="col-lg-6">
              <el-select v-model="sizeForm.region" placeholder="please select your card" class="ml-0">
                <el-option label="Credit1" value="shanghai"></el-option>
                <el-option label="Debit" value="beijing"></el-option>
              </el-select>
            </el-form-item>




            <el-form-item label="Date" class="col-lg-6">
              <el-col :span="11" >
                <el-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1"></el-date-picker>
              </el-col>
            </el-form-item>


        </div>


        <div class="d-flex flex-row">

          <div class="flex-column">

            <el-form-item label="Choose your card" prop="card" class="">
              <el-select v-model="sizeForm.region" placeholder="please select your card" class="ml-0">
                <el-option label="Credit1" value="shanghai"></el-option>
                <el-option label="Debit" value="beijing"></el-option>
              </el-select>
            </el-form-item>

          </div>

          <div class="flex-column">
            <el-form-item label="Date" class="align-items-end">
              <el-col :span="11" >
                <el-date-picker type="date" placeholder="Pick a date" v-model="sizeForm.date1" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
          </div>

        </div>

        <div class="row">
          <div class="col">
            <el-form-item label="Is this payment recurring?" prop="is_recurring">
              <el-switch v-model="sizeForm.delivery" class="float-left mt-3"></el-switch>
            </el-form-item>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <el-form-item size="large">
              <el-button type="primary" @click="onSubmit">Create</el-button>
              <el-button @click="redirect">Cancel</el-button>
            </el-form-item>
          </div>
        </div>
      </el-form>
    </div>
  </div>


</template>

<script>
import router from "@/router";

export default {
name: "BudgetForm",
  data() {
    return {
      sizeForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    redirect() {
      router.go(-1);
    }
  }
}
</script>

<style scoped>
.bg{
  background-color: #eeeeee;
  border-radius: 50px;
  border: 1px solid grey;
}
.w{
  width:40%;
}
</style>