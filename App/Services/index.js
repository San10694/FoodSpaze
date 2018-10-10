import axios from "axios";

const BASE_URL = "http://www.mocky.io/v2/5ac4842c2f00005600f5f9fb";

const api = axios.create({
  baseURL: BASE_URL
});

export const getRestaurantList = () => api.get();
