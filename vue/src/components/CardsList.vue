<template>
  <div class="container">
    <div class="row justify-content-center">
      <el-col class="m-2 col-4 col-sm-3" v-for="card in allCards" :key="card.id">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="card.image" class="img-thumbnail">
          <div style="padding: 14px;">
            <span>{{ card.name }}</span>
            <p class="text-left">{{ card.type }}</p>
            <p class="text-right">Balance: {{ card.balance }} $</p>
            <div class="bottom clearfix row justify-content-between">
              <div class="ml-3 mr-auto">
                <i class="el-icon-delete" @click="handleDelete(card.id)"></i>
              </div>
              <el-button type="text" class="button mr-3">Show details</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>

    <div class="row justify-content-center">
      <CardForm :images="allImages"/>
    </div>

  </div>

</template>

<script>
import CardForm from "@/components/CardForm";
import {mapGetters, mapActions} from "vuex";

export default {
  name: "CardsList",
  components: {CardForm},
  computed: mapGetters(["allCards", "allImages"]),
  methods: {
    ...mapActions(['fetchCards', 'fetchImages', 'deleteCard']),
    handleDelete(id) {
      this.deleteCard(id).then(() => {
        window.location.reload();
      })
    }
  },
  created() {
    this.fetchCards()
    this.fetchImages()
  }
}
</script>

<style scoped>

p {
  font-size: 12px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}
</style>
