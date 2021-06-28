import Vue from 'vue'
import Vuex from 'vuex'
import budget from './modules/budget'
import user from "./modules/user";
import cards from "@/store/modules/cards";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        budget,
        user,
        cards
    }
})
