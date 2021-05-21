import Vue from 'vue'
import App from '../../vue/src/App.vue'
import store from './store'
import 'bootstrap'
import router from '../../vue/src/router'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
