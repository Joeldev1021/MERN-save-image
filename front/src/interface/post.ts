import { IUser } from "."

export interface ICommentPost {
    comment: string
    created_at: string
    imgId: string
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