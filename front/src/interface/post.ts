import { IPostUser, IUser } from "."

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
export interface IPostWidthComent {
    _id: string
    comments: ICommentPost[]
    created_at: string
    description: string
    imgUrl: string
    likes: string[]
    title: string
    updatedAt: string
    userId: IUser | string
}
/* 
_id: "6165e416b6bb6a4ec4ce1c7b"
created_at: "2021-10-12T19:38:00.394Z"
description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
imgUrl: "http://res.cloudinary.com/dhxrohqnk/image/upload/v1634067482/vklck2mx6h1wmmprv6sx.jpg"
likes: Array["615ce0ad9f84786f90963d4f", "6143e6e63920a966504dc347"]
title: "danoana"
updatedAt: "2022-09-16T00:56:10.277Z"
userId: { avatar: "https://st3.depositphotos.com/19428878/35584/v/450/depositph…62-stock-illustration-default-avatar-profile-icon-social.jpg", _id: "6143e6e63920a966504dc347", username: "hola" }
_id: "6143e6e63920a966504dc347"
avatar: "https://st3.depositphotos.com/19428878/35584/v/450/depositph…62-stock-illustration-default-avatar-profile-icon-social.jpg"
username: "hola"
}
// commetn
_id: "61b513b7453a004024d942d2"
comment: "hey hor"
created_at: "2021-12-11T21:10:15.490Z"
imgId: "6165e416b6bb6a4ec4ce1c7b"
likes: Array["614520a2b9f7762db09b1393"]
updatedAt: "2022-10-03T01:13:01.765Z"
userId: Object { avatar: "https://st3.depositphotos.com/19428878/35584/v/450/depositph…62-stock-illustration-default-avatar-profile-icon-social.jpg", _id: "6143e6e63920a966504dc347", username: "hola" }
_id: "6143e6e63920a966504dc347"
avatar: "https://st3.depositphotos.com/19428878/35584/v/450/depositph…62-stock-illustration-default-avatar-profile-icon-social.jpg"
username: "hola"

replyToId:
_id: "633a371db19772f8dc22e666"
comment: "no me gusta tu post"
created_at: "2022-10-03T01:13:01.569Z"
likes: Array["614520a2b9f7762db09b1393"]
updatedAt: "2022-10-10T01:34:42.875Z"
userId: "614520a2b9f7762db09b1393" */