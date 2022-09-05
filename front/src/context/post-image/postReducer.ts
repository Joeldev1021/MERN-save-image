import { IPostUser, IPostState } from "../../interface"
import { ICommentsPost } from "../../interface/post"


type PostAction =
    | { type: "LOADING_POST" }
    | { type: "LOAD_POST_SUCCESS", payload: IPostUser[] }
    | { type: "LOAD_POST_ERROR", payload: string }
    | { type: "LOAD_COMMENTS_POST" }
    | { type: "LOAD_COMMENTS_POST_SUCCESS", payload: ICommentsPost[] }
    | { type: "LOAD_COMMENTS_POST_ERROR", payload: string }

export const postReducer = (state: IPostState, action: PostAction) => {
    switch (action.type) {
        case "LOADING_POST":
            return { ...state, loading: true, errorMessage: null }
        case "LOAD_POST_SUCCESS":
            return { ...state, posts: action.payload, loading: false, errorMessage: null }
        case "LOAD_POST_ERROR":
            return { ...state, errorMessage: action.payload, loading: false }
        case "LOAD_COMMENTS_POST":
            return { ...state, loading: true }
        case "LOAD_COMMENTS_POST_SUCCESS":
            return { ...state, loading: false, commentByPost: action.payload }
        case "LOAD_COMMENTS_POST_ERROR":
            return { ...state, errorMessage: action.payload, loading: false }
        default:
            return { ...state }
    }
}

