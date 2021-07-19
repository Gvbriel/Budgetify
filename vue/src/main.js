import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import axios from "axios";
import router from "./router";
import store from "./store";
import moment from "moment";
import "./plugins/element.js";
import vSelect from "vue-select";
import 'vue-select/dist/vue-select.css';

Vue.component('v-select', vSelect);
Vue.use(ElementUI);
Vue.config.productionTip = false;

// Vue.prototype.$url = "http://api.budgetify.com";

axios.defaults.baseURL = 'http://api.budgetify.com/api';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.defaults.headers.common = {
    Authorization: `Bearer ${localStorage.getItem("access_token") || null}`,
    //withCredentials: true,
    "Access-Control-Allow-Origin": "*",
}

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
