import { IPostUser, IPostState } from "../../interface"


type PostAction =
    | { type: "LOAD_POST" }
    | { type: "LOAD_POST_SUCCESS", payload: IPostUser[] }
    | { type: "LOAD_POST_ERROR", payload: string }
export const postReducer = (state: IPostState, action: PostAction) => {

    switch (action.type) {
        case "LOAD_POST":
            return { ...state, loading: true, errorMessage: null }
        case "LOAD_POST_SUCCESS":
            return { ...state, posts: action.payload, loading: false, errorMessage: null }
        case "LOAD_POST_ERROR":
            return { ...state, errorMessage: action.payload, loading: false }
        default:
            return { ...state }
    }
}

