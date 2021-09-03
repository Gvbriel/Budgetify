<template>
  <div class="container-fluid">
    <!--    <div>-->
    <!--      <el-table-->
    <!--          :data="this.$props.budget"-->
    <!--          style="width: 100%"-->
    <!--          :header-row-style="{textAlign: 'center'}"-->
    <!--          :row-class-name="tableRowClassName"-->
    <!--          v-loading="isLoading"-->
    <!--          :default-sort = "[{prop: 'amount', order: 'descending'},{prop: 'type', order: 'descending'},{prop: 'category', order: 'descending'},{prop: 'title', order: 'descending'},{prop: 'card', order: 'descending'}]"-->
    <!--      >-->
    <!--        <el-table-column type="expand">-->
    <!--          <template slot-scope="props">-->
    <!--            <div class="">-->
    <!--              <div class="row justify-content-around">-->
    <!--                <h1>{{ props.row.category }}</h1>-->
    <!--              </div>-->
    <!--              <div class="row justify-content-around">-->
    <!--                <div class="col-md-6 col-12 text-center">-->
    <!--                  <p>-->
    <!--                    {{ props.row.is_recurring ? "This payment is recurring" : "This payment isn't recurring." }}</p>-->
    <!--                  <p>Amount: {{ props.row.amount }}</p>-->
    <!--                  <p>Description: {{ props.row.description }}</p>-->
    <!--                  <p>Date: {{ props.row.date }}</p>-->
    <!--                </div>-->
    <!--                <div class="col-md-6 col-12 text-center" v-if="props.row.card">-->
    <!--                  <p>Card number: {{ props.row.card.number }}</p>-->
    <!--                  <p>Balance: {{ props.row.card.balance }}$</p>-->
    <!--                </div>-->
    <!--              </div>-->

    <!--              <div class="row justify-content-center">-->
    <!--                <router-link :to="{ name: 'BudgetEdit', params: {name: props.row.title, form: props.row, type: 'Edit'}}"-->
    <!--                             style="text-decoration: none; color: inherit;"-->
    <!--                >-->
    <!--                  <el-button-->
    <!--                      size="mini"-->
    <!--                      icon="el-icon-edit"-->
    <!--                      v-model="visible">Edit-->
    <!--                  </el-button>-->
    <!--                </router-link>-->
    <!--                <el-popover-->
    <!--                    placement="top"-->
    <!--                >-->
    <!--                  <p>Are you sure you want to delete this?</p>-->
    <!--                  <div style="text-align: right; margin: 0">-->
    <!--                    <el-button size="mini" type="text" @click="visible = false">Cancel</el-button>-->
    <!--                    <el-button type="primary" size="mini" @click="visible = false; handleDelete(props.row)">-->
    <!--                      Confirm-->
    <!--                    </el-button>-->
    <!--                  </div>-->
    <!--                  <el-button class="ml-2"-->
    <!--                             size="mini"-->
    <!--                             type="danger"-->
    <!--                             icon="el-icon-delete" slot="reference"-->
    <!--                  >Delete-->
    <!--                  </el-button>-->
    <!--                </el-popover>-->

    <!--              </div>-->
    <!--            </div>-->
    <!--          </template>-->

    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--            sortable-->
    <!--            label="Title"-->
    <!--            prop="title">-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--            sortable-->
    <!--            label="Category"-->
    <!--            prop="category"-->
    <!--        >-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--            sortable-->
    <!--            label="Type"-->
    <!--            prop="type">-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--            sortable-->
    <!--            label="Amount"-->
    <!--            prop="amount"-->
    <!--            cell-class-name="justify-content-center"-->
    <!--        >-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--            sortable-->
    <!--            label="Card"-->
    <!--            width="180"-->
    <!--            cell-class-name="justify-content-center"-->
    <!--        >-->
    <!--          <template slot-scope="scope">-->
    <!--            <vs-tooltip bottom>-->
    <!--              <vs-button circle flat>-->
    <!--                {{ scope.row.card.name }}-->
    <!--              </vs-button>-->
    <!--              <template #tooltip>-->
    <!--                {{scope.row.card.type}} card-->
    <!--                <br/>-->
    <!--                Balance: {{ scope.row.card.balance }} $-->
    <!--              </template>-->
    <!--            </vs-tooltip>-->

    <!--&lt;!&ndash;            <el-popover trigger="hover"&ndash;&gt;-->
    <!--&lt;!&ndash;                        :disabled="scope.row.card != 0 ? false : true"&ndash;&gt;-->
    <!--&lt;!&ndash;                        open-delay="500"&ndash;&gt;-->
    <!--&lt;!&ndash;                        offset="115"&ndash;&gt;-->
    <!--&lt;!&ndash;                        placement="top">&ndash;&gt;-->
    <!--&lt;!&ndash;              <p class="text-center">{{ scope.row.card.type }} card</p>&ndash;&gt;-->
    <!--&lt;!&ndash;              <p>Name: {{ scope.row.card.name }}</p>&ndash;&gt;-->
    <!--&lt;!&ndash;              <p>Number: {{ scope.row.card.number }}</p>&ndash;&gt;-->
    <!--&lt;!&ndash;              <div slot="reference" class="name-wrapper">&ndash;&gt;-->
    <!--&lt;!&ndash;                <el-tag size="medium" :type="scope.row.card != 0 ? setPopoverStyle(scope.row.card.type) : 'danger'"&ndash;&gt;-->
    <!--&lt;!&ndash;                        effect="plain">&ndash;&gt;-->
    <!--&lt;!&ndash;                  {{ scope.row.card != 0 ? scope.row.card.name : cardMissing }}&ndash;&gt;-->
    <!--&lt;!&ndash;                </el-tag>&ndash;&gt;-->
    <!--&lt;!&ndash;              </div>&ndash;&gt;-->
    <!--&lt;!&ndash;            </el-popover>&ndash;&gt;-->

    <!--          </template>-->
    <!--        </el-table-column>-->
    <!--        <el-table-column-->
    <!--            sortable-->
    <!--            label="Date"-->
    <!--            prop="date"-->
    <!--            cell-class-name="text-primary"-->
    <!--        >-->
    <!--        </el-table-column>-->
    <!--      </el-table>-->
    <!--    </div>-->
    <!--    -->
    <div>
      <div class="left">
        <vs-table align="center" v-loading="isLoading" striped>
          <template #thead>
            <vs-tr>
              <vs-th sort @click="budget = $vs.sortData($event, budget, 'title')">
                Title
              </vs-th>
              <vs-th sort @click="budget = $vs.sortData($event, budget, 'category')">
                Category
              </vs-th>
              <vs-th sort @click="budget = $vs.sortData($event, budget, 'type')">
                Type
              </vs-th>
              <vs-th sort @click="budget = $vs.sortData($event, budget, 'amount')">
                Amount
              </vs-th>
              <vs-th sort @click="budget = $vs.sortData($event, budget, 'card_id')">
                Card
              </vs-th>
              <vs-th sort @click="budget = $vs.sortData($event, budget, 'date')">
                Date
              </vs-th>
              <vs-th>
                Actions
              </vs-th>
            </vs-tr>
          </template>
          <template #tbody>
            <vs-tr
                :key="i"
                v-for="(tr, i) in $vs.getPage(budget, page, max_pag)"
                @click="changeState(i)"
            >
              <vs-td>
                {{ tr.title }}
              </vs-td>
              <vs-td>
                {{ tr.category }}
              </vs-td>
              <vs-td>
                {{ tr.type }}
              </vs-td>
              <vs-td>
                {{ tr.amount }}
              </vs-td>
              <vs-td>
                <vs-tooltip left>
                  <vs-button circle flat>
                    {{ tr.card.name }}
                  </vs-button>
                  <template #tooltip>
                    {{tr.card.type}} card
                    <br/>
                    Balance: {{ tr.card.balance }} $
                  </template>
                </vs-tooltip>
              </vs-td>
              <vs-td>
                {{ tr.date }}
              </vs-td>
              <vs-td>
                <vs-row>
                  <vs-tooltip bottom shadow not-hover v-model="tr.is_active">
                    <vs-button @click="tr.is_active=!tr.is_active" danger icon>
                      <i class='bx bx-trash-alt'></i>
                    </vs-button>
                    <template #tooltip>
                      <div class="content-tooltip">
                        <h4 class="center">
                          Confirm
                        </h4>
                        <p>
                          You are sure to delete this user, by doing so you cannot recover the data
                        </p>
                        <footer>
                          <vs-button @click="tr.is_active=false, handleDelete(tr)" danger block>
                            Delete
                          </vs-button>
                          <vs-button @click="tr.is_active=false" transparent dark block>
                            Cancel
                          </vs-button>
                        </footer>
                      </div>
                    </template>
                  </vs-tooltip>
                  <vs-button @click="handleEditRedirect(tr)" flat icon>
                    <i class='bx bx-edit-alt'></i>
                  </vs-button>
                </vs-row>

              </vs-td>

              <template #expand>
                <div v-if="tr.is_expanded"  class="con-content">
                  <div>
                    <p>
                      {{ tr.name }}
                    </p>
                  </div>
                  <div>
                    <vs-button flat icon>
                      <i class='bx bx-lock-open-alt' ></i>
                    </vs-button>
                    <vs-button @click="handleEditRedirect(tr)" flat icon>
                        Edit
                    </vs-button>
                    <vs-tooltip top shadow not-hover v-model="tr.tooltip">
                      <vs-button danger @click="tr.tooltip=!tr.tooltip">
                        Delete
                      </vs-button>
                      <template #tooltip>
                        <div class="content-tooltip">
                          <h4 class="center">
                            Confirm
                          </h4>
                          <p>
                            Are you sure to delete this budget, by doing so you cannot recover the data?
                          </p>
                          <footer>
                            <vs-button @click="handleDelete(tr), tr.tooltip=false" block danger>
                              Remove
                            </vs-button>
                            <vs-button @click="tr.tooltip=false" transparent dark block>
                              Cancel
                            </vs-button>
                          </footer>
                        </div>
                      </template>
                    </vs-tooltip>
                  </div>
                </div>
              </template>
            </vs-tr>
          </template>
          <template #footer>
            <vs-row justify="space-between">
              <vs-col w="2"></vs-col>
              <vs-col w="2">
                <vs-pagination infinite dotted progress class="m-2" v-model="page" :length="$vs.getLength(budget, max_pag)" />
              </vs-col>
              <vs-col w="2">
                <vs-select @change="resetCurrent" class="mr-2 ml-2 mt-2" filter placeholder="Pagination number" v-model="max_pag">
                  <vs-option v-for="n in ar" :label="n" :value="n" :key="n">
                    {{n}}
                  </vs-option>
                </vs-select>
              </vs-col>
            </vs-row>
          </template>
        </vs-table>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import router from "../router";
//TODO when changing pagination options make sure to close expand and set active page to 1
export default {
  name: "BudgetTable",
  props:{
    budget: Array,
    type: String,
    max: Number,
  },
  data() {
    return {
      editActive: false,
      edit: null,
      max_pag: 20,
      editProp: '',
      search: '',
      allCheck: false,
      page: 1,
      active: 0,
      selected: [],
      isLoading: false,
      visible: false,
      available: true,
      color: 'red',
      cardMissing: "Brak",
      category: {
        name: '',
        color: '#409EFF'
      },
      cards: [],
      ar: []
    }

  },
  methods: {
    handleEditRedirect(tr){
      console.log(tr)
      router.push({name: 'BudgetEdit', params: {name: tr.title, form: tr, type: 'Edit'}})
    },
    changeState(i){
      let curr = this.$vs.getPage(this.budget, this.page, this.max_pag)
      curr[i].is_expanded = !curr[i].is_expanded
    },
    resetCurrent(){
      let curr = this.$vs.getPage(this.budget, this.page, this.max_pag)
      for(let obj in curr){
        if(obj.is_expanded)
          obj.is_expanded = false
      }
      this.page = 1
      window.scrollTo(0,0)
    },
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
    ...mapActions(['fetchBudget', 'deleteBudget', 'fetchSortedCards', 'updateBudget', 'fetchCategories', 'addCategory']),
  },
  computed: mapGetters(["allSortedCards", "allCategories"]),
  created() {
    console.log(this.$props)
    for(let x = 5; x <=30; x++){
      this.ar.push(x)
    }
    if(this.$props.type === 'all'){
      this.fetchBudget().then(()=>{
        this.isLoading = false
      })
    }
    if(this.allSortedCards.length === 0){
      this.fetchSortedCards().then(()=>{
        this.isLoading = false
      })}
    if(this.allCategories.length === 0){
      this.fetchCategories().then(()=>{
        this.isLoading = false
      })}
  }
}
</script>

<style scoped>

</style>
