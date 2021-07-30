<template>
  <div class="container">
    <el-row>
      <router-link :to="{ name: 'BudgetAdd', params: {type: 'Create'}}">
        <el-button class="float-right" :loading="false" round>Add new budget</el-button>
      </router-link>
      <div class="float-left mr-2" style="border-radius: 20px;">
        <el-popover
            placement="top"
            width="160"
            v-model="visible"
            round>
          <p>Enter category name:</p>
          <div style="text-align: right; margin: 0">
            <el-form ref="form" :model="category" class="p-2">
              <div class="row">
                <el-input placeholder="Please input" v-model="category.name" small></el-input>
                <el-color-picker
                    v-model="category.color"
                    show-alpha
                    :predefine="predefineColors"
                    class="float-left"
                >
                </el-color-picker>
              </div>

              <el-button size="mini" type="text" @click="visible = false">cancel</el-button>
              <el-button type="primary" size="mini" @click="handleCategorySubmit">confirm</el-button>
            </el-form>
          </div>
          <el-button slot="reference">Add category</el-button>
        </el-popover>

      </div>

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
              <div class="col-md-6 col-12 text-center" v-if="props.row.card">
                <p>Card number: {{ props.row.card.number }}</p>
                <p>Balance: {{ props.row.card.balance }}$</p>
              </div>
            </div>

            <div class="row justify-content-center">
              <router-link :to="{ name: 'BudgetEdit', params: {name: props.row.title, form: props.row, type: 'Edit'}}"
                           style="text-decoration: none; color: inherit;"
              >
                <el-button
                    size="mini"
                    icon="el-icon-edit"
                    v-model="visible">Edit
                </el-button>
              </router-link>


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
      category: {
        name: '',
        color: 'rgba(255, 69, 0, 0.68)'
      },
      cards: [],
      predefineColors: [
        '#ff4500',
        '#ff8c00',
        '#ffd700',
        '#90ee90',
        '#00ced1',
        '#1e90ff',
        '#c71585',
        'rgba(255, 69, 0, 0.68)',
        'rgb(255, 120, 0)',
        'hsv(51, 100, 98)',
        'hsva(120, 40, 94, 0.5)',
        'hsl(181, 100%, 37%)',
        'hsla(209, 100%, 56%, 0.73)',
        '#c7158577'
      ]
    }

  },
  methods: {
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
    },
    handleCategorySubmit(e) {
      e.preventDefault()
      console.log(this.category)
      // this.addCategory(this.category)
    },
    ...mapActions(['fetchBudget', 'deleteBudget', 'fetchSortedCards', 'updateBudget', 'fetchCategories', 'addCategory']),
  },
  computed: mapGetters(["allBudget", "allSortedCards", "allCategories"]),
  created() {
    this.fetchBudget()
    this.fetchSortedCards()
    this.fetchCategories()
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
