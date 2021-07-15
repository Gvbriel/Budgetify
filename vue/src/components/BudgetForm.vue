<template>
  <div class="container-fluid w-50 p-0">

    <el-form ref="form" :model="sizeForm" @submit="onSubmit" size="mini">

      <div class="m-0 p-0 mx-auto justify-content-center">
        <div class="row">

          <div class="col-xl-6 col-12 text-xl-left">
            <el-form-item>
              <el-radio-group v-model="sizeForm.type">
                <el-radio-button label="Spending" default-active></el-radio-button>
                <el-radio-button label="Income"></el-radio-button>
              </el-radio-group>
            </el-form-item>
          </div>

          <div class="col-xl-6 col-12">
            <el-form-item prop="is_recurring">
              <el-switch
                  v-model="sizeForm.is_recurring"
                  active-text="Recurring"
                  inactive-text="Not recurring">
              </el-switch>
            </el-form-item>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <el-form-item>
              <el-input placeholder="E.g. Shopping" v-model="sizeForm.title">
                <template slot="prepend">Title:</template>
              </el-input>
            </el-form-item>
          </div>
        </div>

        <div class="row">
          <div class="col">
            <el-form-item>
              <el-input placeholder="E.g. 100" v-model="sizeForm.amount">
                <template slot="append">$</template>
              </el-input>
            </el-form-item>
          </div>
        </div>

        <div class="row">

          <div class="col">
            <el-form-item prop="desc">
              <el-input placeholder="E.g. shopping in Walmart for cereal" v-model="sizeForm.description">
                <template slot="prepend">Description</template>
              </el-input>
            </el-form-item>
          </div>

        </div>

        <div class="row">

          <div class="col-lg col-12">
            <el-form-item prop="card">
              <el-select v-model="sizeForm.card_id" placeholder="Select card">
                <el-option-group
                    v-for="card in allSortedCards"
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

          <div class="col-lg col-12">
            <el-form-item>
              <el-date-picker
                  v-model="sizeForm.date"
                  type="date"
                  placeholder="Pick a day">
              </el-date-picker>
            </el-form-item>
          </div>

        </div>

        <div class="col-12">
          <el-form-item size="medium">
            <el-button type="primary" @click="onSubmit">Create</el-button>
            <el-button @click="redirect">Cancel</el-button>
          </el-form-item>
        </div>
      </div>
    </el-form>
  </div>


</template>

<script>
import router from "@/router";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BudgetForm",
  data() {
    return {
      sizeForm: {
        title: '',
        type: '',
        date: '',
        card_id: '',
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
      }, {
        label: "Debit",
        types: [{
          value: "Main Debit",
          label: "Main Debit",
        }]
      }
      ]
    };
  },
  computed: mapGetters(["allSortedCards"]),
  created() {
    this.fetchSortedCards()
  },
  methods: {
    ...mapActions(['addBudget', 'fetchSortedCards']),
    onSubmit(e) {
      e.preventDefault();
      console.log(this.sizeForm)
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
  width: 60%;

}
</style>
