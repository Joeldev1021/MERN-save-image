export interface INavigation {
    title: string,
    path: string
}
export interface IUser {
    _id: string
    username: string
    email: string
    created_at: string
    updatedAt: string
    __v?: number
}

export interface IPostImage {
    _id: string
    comments: string[]
    created_at: string
    description: string
    imgUrl: string
    likes: string[]
    title: string
    updatedAt: string[]
    __v?: number
    userId: IUser
}

export interface IUserLogin {
    email: string
    password: string
}

export interface AuthState {
    token: string
}