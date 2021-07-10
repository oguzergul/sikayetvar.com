import axios from "axios";
import {BASE_URL} from "./env";

let axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {"Content-Type": "application/json"}
});

export {axiosInstance};
