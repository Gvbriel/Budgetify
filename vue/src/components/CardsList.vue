<template>
  <div class="container">
    <div class="row justify-content-center">
      <el-col class="m-2" :span="8" v-for="card in allCards" :key="card.id">
        <el-card :body-style="{ padding: '0px' }">
          <img :src="card.image" class="img-thumbnail">
          <div style="padding: 14px;">
            <span>{{ card.name }}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button">Show details</el-button>
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
    ...mapActions(['fetchCards', 'fetchImages'])
  },
  created() {
    this.fetchCards()
    this.fetchImages()
  }
}
</script>

<style scoped>
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
