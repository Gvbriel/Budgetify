import axios from "axios";
import router from "../../router";

const url = "http://api.budgetifly.com/api";

const state = {
    token: localStorage.getItem("access_token") || null,
    isAuthenticated: localStorage.getItem("access_token") !== null,
    name: localStorage.getItem("name"),
    error: []
};

const getters = {
    isAuthenticated: (state) => state.isAuthenticated,
};

const actions = {
    async retrieveToken({commit, getters}, payload) {
        return new Promise((resolve, reject) => {
            console.log(payload);
            const response = axios.post("/login", payload).then((response) => {
                if(response.data.access_token) {
                    const token = response.data.access_token;
                    const name = response.data.user.name;
                    localStorage.setItem("access_token", token);
                    localStorage.setItem("name", name);
                    commit("setToken", token);
                }
                resolve(response)
            }).catch((error)=>{
                reject(error)
            });
        })

    },
    async register({commit}, payload) {
        return new Promise((resolve, reject) => {
            const response = axios.post("/register", payload)
            .then((response) => {
                resolve(response)
            }).catch((error)=> {
                reject(error)
            })
        })

    }
};

const mutations = {
    setToken: (token) => (state.token = token),
};

export default {
    state,
    getters,
    actions,
    mutations,
};
