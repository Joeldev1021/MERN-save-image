import { IPostUser } from "../interface"
import { axiosInter } from "./utils"

export const likePostApi = async (id: string) => {
    return axiosInter.post<IPostUser>(`/post-like/${id}`)
}

export const likeCommentApi = async (idComment: string) => {
    return axiosInter.post(`/post-like/comment/${idComment}`)
}

export const likeReplyApi = async (idComment: string) => {
    return axiosInter.post(`/reply-like/${idComment}`)
}

