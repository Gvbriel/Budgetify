import axios from "axios";

const state = {
    categories: []
};

const getters = {
    allCategories: (state) => state.categories,
};

const actions = {
    async fetchCategories({commit}) {
        const response = await axios.get('/categories/all');
        console.log(response.data)
        commit('setCategories', response.data)
    },
    async addCategory({commit}, payload) {
        const response = await axios.post('/categories').then(() => {
            console.log(response.data)
            commit('newCategory', response.data)
        });
    }
};

const mutations = {
    setCategories: (state, categories) => state.categories = categories,
    newCategory: (state, category) => state.categories.unshift(category)
};

export default {
    state,
    getters,
    actions,
    mutations,
};

