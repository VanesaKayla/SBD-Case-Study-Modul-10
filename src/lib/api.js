import axios from "axios";

const api = axios.create({
  baseURL: "https://completedbackend-production.up.railway.app",
});

export default api;