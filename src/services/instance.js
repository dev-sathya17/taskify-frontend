import axios from "axios";

const baseURL = "https://todolist-backend-hu3n.onrender.com/api/v1";

const instance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

const protectedInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 5000,
  withCredentials: true,
});

export { instance, protectedInstance };
