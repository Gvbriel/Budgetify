import axios from "axios";

let config = {
  baseURL: "http://api.budgetify.com/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token") || null}`,
    withCredentials: true,
    "Access-Control-Allow-Origin": "*",
  },
};

const instance = axios.create(config);

export default { instance };
