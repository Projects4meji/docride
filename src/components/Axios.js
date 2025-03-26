// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend-docride.onrender.com/api/stripe/", // Your Django backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
