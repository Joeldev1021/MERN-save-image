import { IUser } from "."

export interface IPostUpload {
    title: string;
    description: string;
    image: File
}
export interface ICommentPost {
    comment: string
    created_at: string
    imgId: string
    likes: string[]
    updatedAt: string
    userId: IUser
    __v?: number
    _id: string
}
export interface IPostEdite {
    id: string;
    title: string;
    description: string;
    imgUrl: string;
}

export interface ErrorPostResponse {
    errorMessage: string;
}