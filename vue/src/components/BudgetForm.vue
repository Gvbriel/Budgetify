<template>
  <div class="container-fluid w-75 p-0">

    <form>

      <div class="m-0 p-0 mx-auto">
        <div class="row m-2 justify-content-center">
          <div class="col-lg-2"></div>
          <div class="col-lg-4 offset-lg-2 m-2 col-12">
              <vs-switch v-model="sizeForm.type">
                <template #off>
                  Spending
                </template>
                <template #on>
                  Income
                </template>
              </vs-switch>
          </div>

          <div class="col-lg-6 m-2 col-12">
            <vs-row>
              <vs-radio v-model="sizeForm.is_recurring" val="1">
                Recurring
              </vs-radio>
              |
              <vs-radio label-before v-model="sizeForm.is_recurring" val="0">
                Not recurring
              </vs-radio>
            </vs-row>
          </div>
        </div>

        <div class="row mr-4 ml-4 justify-content-center">
          <div class="col-lg-4 col-12 m-2">
              <vs-input
                  primary
                  v-model="sizeForm.title"
                  placeholder="Title"
              />
          </div>
          <div class="col-lg-4 col-12 m-2">
            <vs-input success icon-before v-model="sizeForm.amount" placeholder="Amount">
              <template #icon>
                <i class='bx bx-money'></i>
              </template>
            </vs-input>
          </div>
        </div>

        <div class="row ml-4 mr-4 justify-content-center">
          <div class="col-lg-4 col-12">
            <vs-input class="width" v-model="sizeForm.description" placeholder="Description"/>
          </div>
        </div>

        <div class="row m-4 justify-content-center">
          <div class="col-lg-5 col-12 m-2">
            <vs-select
                filter
                placeholder="Choose card"
                v-model="sizeForm.card_id"
                v-if="allSortedCards"
                :key="allSortedCards.length"
            >
              <vs-option-group v-for="type in allSortedCards" :key="type.label">
                <div slot="title">
                  {{type.label}}
                </div>
                <vs-option v-for="option in type.types" :label="option.label" :value="option.value" :key="option.id">
                  {{option.label}}
                </vs-option>
              </vs-option-group>
            </vs-select>
          </div>

          <div class="col-lg-4 col-12 m-2">
            <vs-select placeholder="Choose category" v-model="sizeForm.category_id" :key="allCategories.length">
              <vs-option v-for="item in allCategories" :key="item.id" :label="item.name" :value="item.id">
                {{item.name}}
              </vs-option>
            </vs-select>
          </div>
        </div>

        <div class="row m-4 justify-content-center">
          <div class="col-lg-4 m-1 col-12">
<!--            <vs-input-->
<!--                placeholder="Choose date"-->
<!--                type="date"-->
<!--                v-model="sizeForm.date"-->
<!--            />-->
            <el-date-picker
                v-model="sizeForm.date"
                type="date"
                placeholder="Pick a day"
            >
            </el-date-picker>
          </div>
        </div>

        <div class="row  justify-content-center">
<!--          <el-form-item size="medium">-->
<!--            <el-button type="primary" @click="onSubmit">{{ this.actionType }}</el-button>-->
<!--            <el-button @click="redirect">Cancel</el-button>-->
<!--          </el-form-item>-->
            <vs-button @click="onSubmit">Submit</vs-button>
            <vs-button @click="redirect" flat>Cancel</vs-button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import router from "@/router";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "BudgetForm",
  props: {
    form: Object,
    type: String
  },
  data() {
    return {
      isLoading: true,
      validated: false,
      active: 0,
      sizeForm: {
        title: '',
        type: true,
        date: '',
        card_id: '',
        description: '',
        amount: '',
        category_id: '',
        is_recurring: 0,
      },
      actionType: localStorage.getItem('type')
    };
  },
  computed: {
    ...mapGetters(['allSortedCards', 'allCategories']),
  },
  created() {
    localStorage.setItem('type', this.$props.type)
    this.actionType = localStorage.getItem('type');
    this.fetchSortedCards();
    console.log(this.allSortedCards)
    this.setForm()
    this.fetchCategories().then(()=>{this.isLoading = false});
  },
  methods: {
    ...mapActions(['addBudget', 'fetchSortedCards', 'fetchCategories', 'updateBudget']),
    onSubmit(e) {
      e.preventDefault();
      let loading = this.startLoading()
      this.setType()
      if (this.actionType == 'Edit') {
        this.updateBudget(this.sizeForm).then((response)=>{
          console.log(response)
          this.openSuccessEditNotification()
          this.redirectToBudgetTimeout()
        }).catch((error)=>{
          if(error.response.status === 422){
            this.open422Notification()
          }else{
            this.openProblemNotificationDuration()
          }
        })
      } else {
        this.addBudget(this.sizeForm).then((response)=>{
          console.log(response)
          this.openSuccessSubmitNotification()
          this.redirectToBudgetTimeout()
        }).catch((error)=>{
          if(error.response.status === 422){
            this.open422Notification()
          }else{
            this.openProblemNotificationDuration()
          }
        })
      }
      loading.close()
    },
    validatedForm(e){
      if(this.validated){
        this.sizeForm = '';
        alert("Added successfully!");
        localStorage.removeItem('type');
        router.go(-1);
        e.preventDefault()
      }
    },
    redirect(e) {
      e.preventDefault();
      router.push({name: 'Budget'});
    },
    setForm() {
      if (this.actionType == 'Edit') {
        this.sizeForm = this.form
      }
    },
    setType(){
      let type = this.sizeForm.type
      if(type === false){
        this.sizeForm.type = 'Spending'
      }else if(type === true){
        this.sizeForm.type = 'Income'
      }
    },
    checkForm(e){

    },
    show(){
      console.log(this.sizeForm.type)
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

input#vs-input--34{
  width: 100px !important;
}

.w {
  width: 60%;
}
</style>
