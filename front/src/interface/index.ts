import { ICommentPost } from "./post"


export interface IUserLogin {
    email: string
    password: string
}


export interface IUser {
    _id: string
    avatar?: string
    username: string
    email: string
    created_at: string
    updatedAt: string
    __v?: number
}
export interface AuthState {
    token: string
    user: IUser | null
    loading: boolean
    errorMessage?: string
}
// Post 
export interface IPostUser {
    _id: string
    comments: string[]
    created_at: string
    description: string
    imgUrl: string
    likes: string[]
    title: string
    updatedAt: string
    __v?: number
    userId: IUser | string // populated or not populated
}


export interface IPostState {
    postsByUser: IPostUser[] | []
    postAll: IPostUser[] | []
    commentByPost: ICommentPost[] | []
    errorMessage: string | null
    loading: boolean
}

// notes interface
export interface INotes {
    _id: string
    title: string
    description: string
    userId: string
    __v?: number
}


export interface IListGroupItem {
    title: string;
    component: React.ReactNode;
}