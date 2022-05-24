import axios from "axios";
export const axiosInstance = axios.create({
    baseURL: "https://zepengblog.herokuapp.com"
    //baseURL: "http://localhost:5000"

})