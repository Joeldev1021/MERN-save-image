import { IPostUser } from '../interface';
import { ICommentPost, IPostUpload } from '../interface/post';
import { axiosIn } from './utils';



export const getPostByUserApi = async () => {
    // intercept token
    return axiosIn.get<IPostUser[]>('/post')
}

export const getAllPostsApi = async () => {
    return axiosIn.get<IPostUser[]>('/post/all')
}

export const uploadPostApi = async (data: IPostUpload) => {
    return axiosIn.post<IPostUser>(`/post/upload`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const updatePostApi = async (data: IPostUser) => {
    return axiosIn.put<IPostUser>(`/post/${data._id}`, data)
}

export const deletePostApi = async (id: string) => {
    return axiosIn.delete<IPostUser>(`/post/${id}`)
}
/* =================== comment===================  */

export const getCommentsPostApi = async (id: string) => {
    return axiosIn.get<ICommentPost[]>(`/post-comment/all/${id}`)
}

export const addCommentByPostApi = async (id: string, comment: string) => {
    return axiosIn.post<ICommentPost>(`/post-comment/add-comment/${id}`, { comment })
}

export const updateCommentPostApi = async (id: string, comment: string) => {
    return axiosIn.put<ICommentPost>(`/post-comment/update-comment/${id}`, { comment })
}

export const deleteCommentPostApi = async (id: string) => {
    return axiosIn.delete<ICommentPost>(`/post-comment/delete-comment/${id}`)
}

export const likePostApi = async (id: string) => {
    return axiosIn.post<IPostUser>(`/post-like/${id}`)
}