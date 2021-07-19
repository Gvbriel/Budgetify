import axios from "axios";
import router from "../../router";

const url = "http://api.budgetifly.com/api";

const state = {
  token: localStorage.getItem("access_token") || null,
  isAuthenticated: localStorage.getItem("access_token") !== null,
};

const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
};

const actions = {
  async retrieveToken({ commit }, payload) {
    console.log(payload);
    const response = axios.post("/login", payload).then((response) => {
      const token = response.data.access_token;
      console.log(token);

      localStorage.setItem("access_token", token);

      commit("setToken", token);
    });
  },
  async register({commit}, payload) {
    const response = axios.post("/register", payload).then(()=>{
      router.push('Login');
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
