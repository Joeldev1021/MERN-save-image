import axios, { AxiosRequestConfig } from 'axios';
import { ICommentsPost } from '../interface/post';

const API_URL = 'http://localhost:5000'

const axiosIn = axios.create({
    baseURL: API_URL
});

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

export const getNotesApi = async (token: string) => {
    const result = await fetch('http://localhost:5000/note/all')
    return result.json()
}

export const getPostByUser = async () => {
    // intercept token
    return axiosIn.get(`${API_URL}/img`)
}

/* export const getPostProfileApi = async (id: string) => {
    return axiosIn.get(`${API_URL}/img-comment/all/${id}`)
      const result = await fetch(`http://localhost:5000/img-comment/all/${id}`)
     return result.json() 
} */
export const getCommentsPostApi = async (id: string) => {
    return axiosIn.get(`${API_URL}/img-comment/all/${id}`)
}

/* export const getPostByUser = async (token: string) => {
    const result = await fetch('http://localhost:5000/img', {
        method: 'GET',
        headers: new Headers({
            'Authorization': token,
            'Content-Type': 'application/json'
        }),
    })
    return result.json()
} */