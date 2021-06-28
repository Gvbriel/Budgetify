import axios from "axios";
import moment from "moment";

const url = "http://api.budgetifly.com/api/budget";

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
  getHeader: (state) => state.header,
};

const actions = {
  async fetchBudget({ commit, state }) {
    const response = await axios.get(url);

    console.log(state.header);
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
