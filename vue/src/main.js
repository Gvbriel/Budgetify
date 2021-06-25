import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import axios from "axios";
import router from "./router";
import store from "./store";
import moment from "moment";
import "./plugins/element.js";

Vue.use(ElementUI);
Vue.config.productionTip = false;

axios.defaults = {
  baseURL: "http://api.budgetify.com/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token") || null}`,
    withCredentials: true,
    "Access-Control-Allow-Origin": "*",
  },
};

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
