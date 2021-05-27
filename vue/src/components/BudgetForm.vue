<template>
  <div class="container-fluid">
    <div class="w mx-auto">

      <el-form ref="form" :model="sizeForm" @submit="onSubmit" label-width="120px" size="mini">

        <div class="d-flex">
          <div class="mr-auto">
            <el-form-item label="Type">
              <el-radio-group v-model="sizeForm.type">
                <el-radio-button label="Spending" default-active></el-radio-button>
                <el-radio-button label="Income"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </div>
          <div>
            <el-form-item prop="is_recurring">
              <el-switch
                  v-model="sizeForm.is_recurring"
                  active-text="Recurring"
                  inactive-text="Not recurring">
              </el-switch>
            </el-form-item>
          </div>
        </div>

        <div class="d-flex flex-column">
          <el-form-item label="Title">
            <el-input v-model="sizeForm.title"></el-input>
          </el-form-item>
        </div>

        <div class="d-flex flex-column">
          <el-form-item label="Amount">
            <el-input placeholder="Enter amount" v-model="sizeForm.amount">
              <template slot="append">$</template>
            </el-input>
          </el-form-item>
        </div>

        <div class="d-flex flex-column">
          <el-form-item label="Description" prop="desc">
            <el-input type="textarea" v-model="sizeForm.description"></el-input>
          </el-form-item>
        </div>

        <div class="d-flex">
          <div class="mr-auto">
            <el-form-item label="Choose your card" prop="card">
              <el-select v-model="sizeForm.card" placeholder="Select card">
                <el-option-group
                    v-for="card in cards"
                    :key="card.label"
                    :label="card.label">
                  <el-option
                      v-for="item in card.types"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value">
                  </el-option>
                </el-option-group>
              </el-select>
            </el-form-item>
          </div>

          <div>
            <el-form-item label="Date">
              <el-date-picker
                  v-model="sizeForm.date"
                  type="date"
                  placeholder="Pick a day">
              </el-date-picker>
            </el-form-item>
          </div>
        </div>

        <div class="d-flex flex-column">
          <el-form-item size="large">
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button @click="redirect">Cancel</el-button>
          </el-form-item>
        </div>

      </el-form>
    </div>
  </div>

</template>

<script>
import router from "@/router";
import { mapActions } from "vuex";

export default {
  name: "BudgetForm",
  data() {
    return {
      sizeForm: {
        title: '',
        type: '',
        date: '',
        card: '',
        description: '',
        amount: '',
        is_recurring: false,
      },
      cards: [{
        label: "Credit",
        types: [{
          value: "Main credit",
          label: "Main credit",
        }]
      },{
          label: "Debit",
          types: [{
            value: "Main Debit",
            label: "Main Debit",
          }]
        }
      ]
    };
  },
  methods: {
    ...mapActions(['addBudget']),
    onSubmit(e) {
      e.preventDefault();
      this.addBudget(this.sizeForm);
      console.log('submit!');
      this.sizeForm = '';
      alert("Added successfully!");
      router.go(-1);
    },
    redirect() {
      router.go(-1);
    }
  }
}
</script>

<style scoped>
.bg {
  background-color: #eeeeee;
  border-radius: 50px;
  border: 1px solid grey;
}

.w {
  width: 40%;

}
</style>