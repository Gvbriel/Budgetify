<template>
  <div class="container">
    <el-row>
      <router-link to="/budget/add">
        <el-button class="float-right" :loading="false" round>Add new budget</el-button>
      </router-link>
      <router-link to="/cards">
        <el-button class="float-left mr-2" :loading="false" round>Add new card</el-button>
      </router-link>

    </el-row>

    <el-table
        :data="allBudget"
        style="width: 100%"
        :header-row-style="{textAlign: 'center'}"
        :row-class-name="tableRowClassName"
    >
      <el-table-column type="expand">
        <template slot-scope="props">
          <div class="">
            <div class="row justify-content-around">
              <h1>{{ props.row.category }}</h1>
            </div>
            <div class="row justify-content-around">
              <div class="col-md-6 col-12 text-center">
                <p>
                  {{ props.row.is_recurring ? "This payment is recurring" : "This payment isn't recurring." }}</p>
                <p>Amount: {{ props.row.amount }}</p>
                <p>Description: {{ props.row.description }}</p>
                <p>Date: {{ props.row.date }}</p>
              </div>
              <div class="col-md-6 col-12 text-center">
                <p>Card number: {{ props.row.card.number }}</p>
                <p>Balance: {{ props.row.card.balance }}$</p>
              </div>
            </div>

            <div class="row justify-content-center">
              <el-button
                  size="mini"
                  icon="el-icon-edit"
                  v-model="visible"
                  @click="handleEdit(props.row)">Edit
              </el-button>
              <el-popover
                  placement="top"
              >
                <p>Are you sure you want to delete this?</p>
                <div style="text-align: right; margin: 0">
                  <el-button size="mini" type="text" @click="visible = false">Cancel</el-button>
                  <el-button type="primary" size="mini" @click="visible = false; handleDelete(props.row)">
                    Confirm
                  </el-button>
                </div>
                <el-button class="ml-2"
                           size="mini"
                           type="danger"
                           icon="el-icon-delete" slot="reference"
                >Delete
                </el-button>
              </el-popover>

            </div>
          </div>
          <el-collapse v-bind:style="[available ? {'display': 'none'} : {'display':'inline'}]" accordion>
            <el-collapse-item title="Edit" name="1">
              <div class="container-fluid w-75 p-0">
                <el-form ref="form" :model="sizeForm" @submit="handleEditSubmit" size="mini">
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
                    <div class="row justify-content-center">
                      <el-form-item size="medium">
                        <el-button type="primary" @click="handleEditSubmit">Edit</el-button>
                        <el-button @click="redirect">Cancel</el-button>
                      </el-form-item>
                    </div>

                  </div>
                </el-form>
              </div>
            </el-collapse-item>
          </el-collapse>
        </template>

      </el-table-column>
      <el-table-column
          label="Title"
          prop="title">
      </el-table-column>
      <el-table-column
          label="Category"
          prop="category"
      >
      </el-table-column>
      <el-table-column
          label="Type"
          prop="type">
      </el-table-column>
      <el-table-column
          label="Amount"
          prop="amount"
          cell-class-name="text-primary"
      >
      </el-table-column>
      <el-table-column
          label="Card"
          width="180"
          cell-class-name="justify-content-center"
      >
        <template slot-scope="scope">
          <el-popover trigger="hover" :disabled="scope.row.card != 0 ? false : true" placement="bottom">
            <p class="text-center">{{ scope.row.card.type }} card</p>
            <p>Name: {{ scope.row.card.name }}</p>
            <p>Number: {{ scope.row.card.number }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium" :type="scope.row.card != 0 ? setPopoverStyle(scope.row.card.type) : 'danger'"
                      effect="plain">
                {{ scope.row.card != 0 ? scope.row.card.name : cardMissing }}
              </el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
import {mapGetters, mapActions} from "vuex"

export default {
  name: "BudgetList",
  data() {
    return {
      visible: false,
      available: true,
      color: 'red',
      cardMissing: "Brak",
      sizeForm: {
        title: '',
        type: '',
        date: '',
        card_id: '',
        description: '',
        amount: '',
        is_recurring: false,
      },
      cards: []
    }
  },
  methods: {
    ...mapActions(['fetchBudget', 'deleteBudget', 'fetchSortedCards', 'updateBudget']),
    setStyle(type) {
      if (type.type === "Income") {
        return 'text-primary'
      }
    },
    setPopoverStyle(type) {
      if (type === 'Debit') {
        return 'info'
      } else {
        return 'warning'
      }
    },
    tableRowClassName({row}) {
      if (row.type === "Income") {
        console.log(row.type);
        return 'income-row';
      } else {
        return 'spending-row';
      }
    },
    handleDelete(item) {
      this.deleteBudget(item.id).then(() => {
        this.fetchBudget();
        window.location.reload();
      });
    },
    handleEdit(item) {
      this.available = !this.available;
      this.getData(item)
      console.log(item)
    },
    getData(item) {
      this.sizeForm = item
      console.log(this.sizeForm)
    },
    handleEditSubmit(e) {
      e.preventDefault();
      this.updateBudget(this.sizeForm)
    }
  },
  computed: mapGetters(["allBudget", "allSortedCards"]),
  created() {
    this.fetchBudget()
    this.fetchSortedCards()
  }
}
</script>

<style scoped>
.el-table {
  color: black !important;
}

.el-table .income-row {
  background-color: blue;
}

.el-table .spending-row {
  background-color: #FF1801;
  opacity: .2;
}
</style>
