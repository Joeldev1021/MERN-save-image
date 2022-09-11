import { IPostUser, IPostState } from "../../interface"
import { ICommentPost } from "../../interface/post"


type PostAction =
    | { type: 'LOAD_ALL_POST' }
    | { type: "LOAD_ALL_POST_SUCCESS", payload: IPostUser[] }
    | { type: "LOAD_ALL_POST_ERROR", payload: string }
    | { type: "LOAD_POST_USER" }
    | { type: "LOAD_POST_USER_SUCCESS", payload: IPostUser[] }
    | { type: "LOAD_POST_USER_ERROR", payload: string }
    | { type: "LOAD_UPLOAD_POST" }
    | { type: "LOAD_UPLOAD_POST_SUCCESS", payload: IPostUser }
    | { type: "LOAD_UPLOAD_POST_ERROR", payload: string }
    | { type: "LOAD_COMMENTS_POST" }
    | { type: "LOAD_COMMENTS_POST_SUCCESS", payload: ICommentPost[] }
    | { type: "LOAD_COMMENTS_POST_ERROR", payload: string }

export const postReducer = (state: IPostState, action: PostAction) => {
    switch (action.type) {
        case 'LOAD_ALL_POST':
            return { ...state, LOAD: true }
        case 'LOAD_ALL_POST_SUCCESS':
            return { ...state, postAll: action.payload, loading: false }
        case 'LOAD_ALL_POST_ERROR':
            return { ...state, loading: false, errorMessage: action.payload }
        // get post user
        case "LOAD_POST_USER":
            return { ...state, loading: true, errorMessage: null }
        case "LOAD_POST_USER_SUCCESS":
            return { ...state, postsByUser: action.payload, loading: false, errorMessage: null }
        case "LOAD_POST_USER_ERROR":
            return { ...state, errorMessage: action.payload, loading: false }
        // upload post
        case "LOAD_UPLOAD_POST":
            return { ...state, loading: true, errorMessage: null }
        case "LOAD_UPLOAD_POST_SUCCESS":
            return { ...state, postAll: [...state.postAll, action.payload], postsByUser: [...state.postsByUser, action.payload], loading: false }
        case "LOAD_UPLOAD_POST_ERROR":
            return { ...state, loading: false, errorMessage: action.payload }
        // get comment post
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

