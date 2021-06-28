<template>
  <el-form ref="form" class="m-4" :model="cardForm" @submit="onSubmit"
           size="small">

    <div class="mx-auto m-0 p-0 justify-content-center">
      <div class="row">
        <div class="col-lg-4 col-12 text-left">
          <el-form-item>
            <el-radio-group v-model="cardForm.type">
              <el-radio-button label="Debit" default-active></el-radio-button>
              <el-radio-button label="Credit"></el-radio-button>
            </el-radio-group>
          </el-form-item>
        </div>
        <div class="col-lg-8 col-12">
          <div>
            <el-form-item prop="number">
              <el-input type="input" placeholder="5555 3412 4444 1115" v-model="cardForm.number">
                <template slot="prepend">Number</template>
              </el-input>
            </el-form-item>
          </div>
        </div>
      </div>

      <div class="row">

        <div class="col-md">
          <el-form-item prop="name">
            <el-input type="input" v-model="cardForm.name">
              <template slot="prepend">Name</template>
            </el-input>
          </el-form-item>
        </div>

        <div class="col-md">
          <el-form-item size="small" prop="balance">
            <el-input type="input" v-model="cardForm.balance">
              <template slot="prepend">Balance</template>
            </el-input>
          </el-form-item>
        </div>

      </div>

      <v-select :options="images" v-model="cardForm.image_id"
                :getOptionLabel="image => image.name">
        <template slot="option" slot-scope="image">
          <img @click="onChange(image)" style="height: 100px;" :src="image.url" :value="image.id" :label="image.name"/>
          {{ image.name }}
        </template>
      </v-select>

    </div>


    <div class="justify-content-center">
      <el-form-item size="medium">
        <el-button type="primary" @click="onSubmit">Create</el-button>
        <el-button @click="clearForm">Clear</el-button>
      </el-form-item>
    </div>


  </el-form>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "CardForm",
  props: ['images'],
  data() {
    return {
      cardForm: {
        name: '',
        type: '',
        balance: '',
        number: '',
        image_id: ''
      },
    };
  },
  methods: {
    ...mapActions(['addCard']),
    onSubmit(e) {
      e.preventDefault();
      this.cardForm.image_id = this.cardForm.image_id.id
      console.log(this.cardForm);
      //this.addCard(this.cardForm);
    },
    clearForm(e) {
      console.log(this.cardForm);
      this.cardForm = {
        name: '',
        type: '',
        balance: '',
        number: '',
      }
    },
    onChange(image) {
      console.log(image)
    }
  }
}
</script>

<style scoped>

</style>
