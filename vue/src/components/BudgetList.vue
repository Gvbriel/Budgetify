  <template>
    <div class="container">
        <el-row>
          <router-link to="/budget/add">
            <el-button class="float-right" :loading="false" round>Add new</el-button>
          </router-link>
        </el-row>
        <el-table
            :data="allBudget"
            style="width: 100%">
          <el-table-column type="expand">
            <template slot-scope="props">
              <p>Amount: {{props.row.amount}}</p>
              <p>Description: {{ props.row.description }}</p>
              <p>{{props.row.is_recurring ? "This payment is recurring" : "This payment isn't recurring."}}</p>
              <p>Date: {{ props.row.created_at }}</p>
              <el-button
                  size="mini"
                  icon="el-icon-edit"
                  @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
              <el-button
                  size="mini"
                  type="danger"
                  icon="el-icon-delete"
                  @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            </template>
          </el-table-column>
          <el-table-column
              label="title"
              prop="title">
          </el-table-column>
          <el-table-column
              label="Type"
              prop="type">
          </el-table-column>
          <el-table-column
              label="Amount"
              prop="amount">
          </el-table-column>
          <el-table-column
              label="Card"
              width="180">
            <template slot-scope="scope">
              <el-popover trigger="hover" placement="right-start" offset="1">
                <p>Name: {{ scope.row.name }}</p>
                <p>Addr: {{ scope.row.address }}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag size="medium">Card</el-tag>
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
  methods: {
    ...mapActions(['fetchBudget'])
  },
  computed: mapGetters(["allBudget"]),
  created() {
    this.fetchBudget()
  }
}
</script>

<style scoped>

</style>
