import { IPostUser } from '../interface';
import { ICommentPost, IPostUpload } from '../interface/post';
import { axiosIn } from './utils';



export const getPostByUserApi = async () => {
    // intercept token
    return axiosIn.get<IPostUser[]>('/img')
}

export const getAllPostsApi = async () => {
    return axiosIn.get<IPostUser[]>('/img/all')
}

export const uploadPostApi = async (data: IPostUpload) => {
    return axiosIn.post<IPostUser>(`/img/upload`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const updatePostApi = async (data: IPostUser) => {
    return axiosIn.put<IPostUser>(`/img/${data._id}`, data)
}

export const deletePostApi = async (id: string) => {
    return axiosIn.delete<IPostUser>(`/img/${id}`)
}
/* =================== comment===================  */

export const getCommentsPostApi = async (id: string) => {
    return axiosIn.get<ICommentPost[]>(`/img-comment/all/${id}`)
}

export const addCommentByPostApi = async (id: string, comment: string) => {
    return axiosIn.post<ICommentPost>(`/img-comment/add-comment/${id}`, { comment })
}

export const updateCommentPostApi = async (id: string, comment: string) => {
    return axiosIn.put<ICommentPost>(`/img-comment/update-comment/${id}`, { comment })
}

export const deleteCommentPostApi = async (id: string) => {
    return axiosIn.delete<ICommentPost>(`/img-comment/delete-comment/${id}`)
}

export const likePostApi = async (id: string) => {
    return axiosIn.post<IPostUser>(`/img-like/${id}`)
}