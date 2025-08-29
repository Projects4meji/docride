import axios from "axios";

const baseURL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8000/api/stripe/"
    : "https://your-service-name-chpp.onrender.com/api/stripe/";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
