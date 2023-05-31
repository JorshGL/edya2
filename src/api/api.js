import axios from "axios";

export const api = axios.create({
  baseURL: "https://edya2-backend.onrender.com/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});