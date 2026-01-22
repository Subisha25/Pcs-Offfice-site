import axios from "axios";

const api = axios.create({
  baseURL: "https://pcstech.in/pcs_backend/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const IMG_BASE_URL = "https://pcstech.in/pcs_backend";

export default api;
