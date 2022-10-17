import { ICommentPost } from "./post"





export interface IUser {
    _id: string
    avatar: string
    username: string
    email?: string
    created_at?: string
    updatedAt?: string
    __v?: number
}
export interface AuthState {
    token: string | null
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
    userId: IUser  // populated or not populated
}




export interface IPostState {
    postsByUser: IPostUser[]
    postAll: IPostUser[]
    commentByPost: ICommentPost[]
    errorMessage: string | null
    loading: boolean
}

export interface ICmtState {
    commentByPost: ICommentPost[]
    loading: boolean
    errorMessage: string | null
}


export interface IListGroupItem {
    title: string;
    component: React.ReactNode;
}