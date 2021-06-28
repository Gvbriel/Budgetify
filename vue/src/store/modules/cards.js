import axios from "axios";
import moment from "moment";

const url = "http://api.budgetifly.com/api/card";
const urlImage = "http://api.budgetifly.com/api/images";

const formatDate = (value) => {
    if (value) {
        return moment(String(value)).format("DD-MM-YYYY hh:mm:ss");
    }
};

const state = {
    cards: [],
    images: []
};

const getters = {
    allCards: (state) => state.cards,
    allImages: (state) => state.images
};

const actions = {
    async fetchCards({commit, state}) {
        const response = await axios.get(url);

        console.log(response.data);
        commit("setCards", response.data);
    },
    async addCard({commit}, payload) {
        const response = await axios.post(url, payload);
        commit("newCard", response.data);
    },
    async fetchImages({commit}) {
        const response = await axios.get(urlImage);
        console.log(response.data);
        commit("setImages", response.data);
    }
};

const mutations = {
    setCards: (state, cards) => (state.cards = cards),
    newCard: (state, card) => state.cards.unshift(card),
    setImages: (state, images) => state.images = images
};

export default {
    state,
    getters,
    actions,
    mutations,
};
