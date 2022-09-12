import axios, { AxiosRequestConfig } from 'axios';
import { IPostUser } from '../interface';
import { ICommentPost, IPostUpload } from '../interface/post';

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

export const getPostByUserApi = async () => {
    // intercept token
    return axiosIn.get<IPostUser[]>(`${API_URL}/img`)
}

export const getAllPostsApi = async () => {
    return axios.get<IPostUser[]>("http://localhost:5000/img/all")
}

export const uploadPostApi = async (data: IPostUpload) => {
    return axiosIn.post<IPostUser>(`${API_URL}/img/upload`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}

export const updatePostApi = async (data: IPostUser) => {
    return axiosIn.put<IPostUser>(`${API_URL}/img/${data._id}`, data)
}

export const deletePostApi = async (id: string) => {
    return axiosIn.delete<IPostUser>(`${API_URL}/img/${id}`)
}
/* =================== comment===================  */

export const getCommentsPostApi = async (id: string) => {
    return axiosIn.get<ICommentPost[]>(`${API_URL}/img-comment/all/${id}`)
}

export const addCommentByPostApi = async (id: string, comment: string) => {
    return axiosIn.post<ICommentPost>(`${API_URL}/img-comment/add-comment/${id}`, { comment })
}

export const updateCommentPostApi = async (id: string, comment: string) => {
    return axiosIn.put<ICommentPost>(`${API_URL}/img-comment/update-comment/${id}`, { comment })
}

export const deleteCommentPostApi = async (id: string) => {
    return axiosIn.delete<ICommentPost>(`${API_URL}/img-comment/delete-comment/${id}`)
}
