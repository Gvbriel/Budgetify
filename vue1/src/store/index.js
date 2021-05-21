import Vuex from 'vuex'
import Vue from 'vue'
import budget from '../../../vue/src/store/modules/budget'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        budget
    }
})
