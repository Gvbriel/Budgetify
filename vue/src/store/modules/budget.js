import axios from "axios";
import moment from "moment";

const url = "http://api.budgetify.com/api/budget";

const token = localStorage.getItem("access_token");

const header = {
  headers: {
    Authorization: `Bearer ${token}`,
    withCredentials: true,
  },
};

const formatDate = (value) => {
  if (value) {
    return moment(String(value)).format("DD-MM-YYYY hh:mm:ss");
  }
};

const state = {
  budget: [],
  token: localStorage.getItem("access_token") || null,
};

const getters = {
  allBudget: (state) => state.budget,
  getToken: (state) => state.token,
};

const actions = {
  async fetchBudget({ commit }) {
    const response = await axios.get(url, header);

    console.log(token);
    commit("setBudget", response.data);
  },
  async addBudget({ commit }, payload) {
    payload.date = formatDate(payload.date);
    console.log(payload.date);
    const response = await axios.post(url, payload);

    commit("newBudget", response.data);
  },
};

const mutations = {
  setBudget: (state, budget) => (state.budget = budget),
  newBudget: (state, singlebudget) => state.budget.unshift(singlebudget),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
