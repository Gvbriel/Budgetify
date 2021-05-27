import axios from 'axios'
import moment from "moment";

const url = 'http://api.budgetify.pl/api/budget'

const formatDate = (value) => {
    if(value){
        return moment(String(value)).format('DD-MM-YYYY hh:mm:ss')
    }
}

const state = {
    budget:[]
}

const getters = {
    allBudget: (state) => state.budget
}

const actions = {
    async fetchBudget({commit}) {
        const response = await axios.get(url)

        console.log(response.data)
        commit('setBudget', response.data)
    },
    async addBudget({commit}, payload){
        payload.date = formatDate(payload.date)
        console.log(payload.date)
        const response = await axios.post(url, payload)

        commit('newBudget', response.data)
    }
}

const mutations = {
    setBudget: (state, budget) => (state.budget = budget),
    newBudget: (state, singlebudget) => state.budget.unshift(singlebudget)
}

export default {
    state, getters, actions, mutations
}
