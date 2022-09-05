import { IUser } from "."

export interface ICommentsPost {
    comment: string
    created_at: string
    imgId: string
    updatedAt: string
    userId: IUser
    __v?: number
    _id: string
}