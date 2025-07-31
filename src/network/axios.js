import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://bookings-json-server-api-production.up.railway.app",
});

export default axiosInstance;
