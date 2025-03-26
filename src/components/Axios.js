// src/api/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://your-service-name.onrender.com/api/stripe/", // Your Django backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
