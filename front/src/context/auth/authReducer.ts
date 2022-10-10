import { AuthState, IUser } from "../../interface"


type AuthAction =
    | { type: "LOGIN_LOADING" }
    | { type: "LOGIN_SUCCESS", payload: { token: string, user: IUser } }
    | { type: "LOGIN_ERROR", payload: string }
    | { type: "LOGOUT_LOADING" }
    | { type: "LOGOUT_SUCCESS" }
    | { type: "LOGOUT_ERROR" }
    | { type: "LOADING_REFRESH_TOKEN" }
    | { type: "LOADING_REFRESH_TOKEN_SUCCESS", payload: { token: string } }
    | { type: "LOADING_REFRESH_TOKEN_ERROR" }
    | { type: "LOADING_UPDATE_AVATAR" }
    | { type: "LOADING_UPDATE_AVATAR_SUCCESS", payload: IUser }
    | { type: "LOADING_UPDATE_AVATAR_ERROR" }

export const authReducer = (state: AuthState, action: AuthAction) => {

    switch (action.type) {
        case "LOGIN_LOADING":
            return { ...state, loading: true, errorMessage: undefined }
        case "LOGIN_SUCCESS":
            return { ...state, token: action.payload.token, user: action.payload.user, errorMessage: undefined, loading: false }
        case "LOGIN_ERROR":
            return { ...state, errorMessage: action.payload, loading: false }
        case "LOGOUT_LOADING":
            return { ...state, loading: true }
        case "LOGOUT_SUCCESS":
            return { ...state, token: '', user: null, loading: false }
        case "LOGOUT_ERROR":
            return { ...state, errorMessage: "not logout" }
        case "LOADING_REFRESH_TOKEN":
            return { ...state, errorMessage: undefined, loading: false }
        case "LOADING_REFRESH_TOKEN_SUCCESS":
            return { ...state, token: action.payload.token, errorMessage: undefined, loading: false }
        case "LOADING_UPDATE_AVATAR":
            return { ...state, loading: true }
        case "LOADING_UPDATE_AVATAR_SUCCESS":
            return { ...state, user: action.payload, loading: false }
        default:
            return { ...state }
    }
}