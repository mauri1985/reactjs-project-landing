import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

// 🔐 interceptor para enviar token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  console.log("TOKEN:", token);

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

// 🚪 manejar token expirado
API.interceptors.response.use(
  (response) => response,

  (error) => {
    if (error.response?.status === 401 || error.response?.status === 403) {
      localStorage.removeItem("token");

      // opcional:
      // window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export default API;
