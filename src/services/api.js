import axios from "axios";

const api = axios.create({
  baseURL: "https://api.vife.dev/verify-app/v1/"
});

export default api;
