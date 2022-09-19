import { ICommentPost } from "../interface/post"
import { axiosInter } from "./utils"

export const getCommentsPostApi = async (id: string) => {
    return axiosInter.get<ICommentPost[]>(`/post-comment/all/${id}`)
}

export const addCommentByPostApi = async (id: string, comment: string) => {
    return axiosInter.post<ICommentPost>(`/post-comment/add-comment/${id}`, { comment })
}

export const updateCommentPostApi = async (id: string, comment: string) => {
    return axiosInter.put<ICommentPost>(`/post-comment/update-comment/${id}`, { comment })
}

export const deleteCommentPostApi = async (id: string) => {
    return axiosInter.delete<ICommentPost>(`/post-comment/delete-comment/${id}`)
}

