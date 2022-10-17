import { IPostUser } from "../interface"
import { axiosInter } from "./utils"

export const likePostApi = async (id: string) => {
    return axiosInter.post<IPostUser>(`/like/post/${id}`)
}

export const likeCommentApi = async (idComment: string) => {
    return axiosInter.post(`/like/comment/${idComment}`)
}

export const likeReplyApi = async (idComment: string) => {
    return axiosInter.post(`/reply/${idComment}`)
}

