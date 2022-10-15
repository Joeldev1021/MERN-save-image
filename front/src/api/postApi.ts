import { IPostUser } from '../interface';
import { IPostUpload, IPostWidthComent } from '../interface/post';
import { axiosInter } from './utils';



export const getPostByUserApi = async () => {
    // intercept token
    return axiosInter.get<IPostUser[]>('/post')
}

export const getAllPostsApi = async () => {
    return axiosInter.get<IPostUser[]>('/post/all')
}

export const uploadPostApi = async (data: IPostUpload) => {
    return axiosInter.post<IPostUser>(`/post/upload`, data, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const updatePostApi = async (data: IPostUser) => {
    return axiosInter.put<IPostUser>(`/post/${data._id}`, data)
}

export const deletePostApi = async (id: string) => {
    return axiosInter.delete<IPostUser>(`/post/${id}`)
}

export const getPostWidthCommentApi = async (id: string) => {
    return axiosInter.get<IPostWidthComent>(`/post/comment-all/${id} `)
}
