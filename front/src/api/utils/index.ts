
import axios, { AxiosRequestConfig } from 'axios';

const API_URL = 'http://localhost:4000'

/* Creating a new instance of axios with the baseURL set to the API_URL. */
export const axiosIn = axios.create({
    baseURL: API_URL
});

/* Adding the token to the header of the request. */
axiosIn.interceptors.request.use(
    function (config: AxiosRequestConfig<any>) {
        if (config.headers) {
            config.headers.Authorization = `${localStorage.getItem("token")}`
        }
        return config
    },
    function (error: any) {
        return Promise.reject(error)
    }

)