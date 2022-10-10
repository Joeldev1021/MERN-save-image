import { IUser } from "."

export interface IPostUpload {
    title: string;
    description: string;
    image: File
}

export interface IComment {
    _id: string
    comment: string
    likes: string[]
    updatedAt: string
    created_at: string
}
export interface IReply extends IComment {
    userId: IUser,
}

export interface ICommentPost {
    _id: string
    comment: string
    created_at: string
    imgId: string
    likes: string[]
    updatedAt: string
    replyToId: IReply[]
    userId: IUser
    __v?: number
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

