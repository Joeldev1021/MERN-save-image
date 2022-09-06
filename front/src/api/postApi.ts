import axios, { AxiosRequestConfig } from 'axios';
import { IPostUser } from '../interface';

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

export const getNotesApi = async () => {
    const result = await fetch('http://localhost:5000/note/all')
    return result.json()
}

export const getPostByUser = async () => {
    // intercept token
    return axiosIn.get(`${API_URL}/img`)
}

export const getAllPostsApi = async () => {
    return axios.get<IPostUser[]>("http://localhost:5000/img/all")
}

/* export const getPostProfileApi = async (id: string) => {
    return axiosIn.get(`${API_URL}/img-comment/all/${id}`)
      const result = await fetch(`http://localhost:5000/img-comment/all/${id}`)
     return result.json() 
} */
export const getCommentsPostApi = async (id: string) => {
    return axiosIn.get(`${API_URL}/img-comment/all/${id}`)
}

export const uploadPostApi = async (data: string) => {
    return axiosIn.post(`${API_URL}/img/upload`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

