import axios from "axios";

export default axios.create({
  baseURL: import.meta.env.VITE_TEA_LAB_BACKEND_BASE_URL,
});
