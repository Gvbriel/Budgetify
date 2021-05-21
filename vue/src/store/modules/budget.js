import axios from 'axios'

const url = 'http://api.budgetify.pl/api/budget'

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
    }
}

const mutations = {
    setBudget: (state, budget) => (state.budget = budget)
}

export default {
    state, getters, actions, mutations
}
