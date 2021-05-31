import axios from 'axios'

const url = 'http://api.budgetify.pl/api'

const state = {
    token: localStorage.getItem('access_token') || null,
    isAuthenticated: localStorage.getItem('access_token') !== null
}

const getters = {
    isAuthenticated: state => state.isAuthenticated
}

const actions = {
    async retrieveToken({commit}, payload){
       console.log(payload)
        const response = axios.post(url + '/login', payload)
            .then(response => {
                const token = response.data.access_token

                localStorage.setItem('access_token', token)

                commit('setToken', token)
            })
    }
}

const mutations = {
    setToken: (token) => state.token = token
}

export default {
    state, getters, actions, mutations
}
