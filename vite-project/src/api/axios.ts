import axios from "axios";

export const productApi = axios.create({
    baseURL: "https://dummyjson.com/products",
    timeout: 3000
});