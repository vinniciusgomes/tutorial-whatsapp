import axios from "axios";

const api = axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Accept-Language": "pt-BR",
    client_id: process.env.REACT_APP_CLIENT_ID
  },
  baseURL: "https://api.vife.dev/verify-app/v1/"
});

export default api;
