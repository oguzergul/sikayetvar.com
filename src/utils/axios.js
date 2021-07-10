import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {"Content-Type": "application/json"}
});


export {axiosInstance};
