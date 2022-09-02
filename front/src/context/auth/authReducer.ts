import { AuthState } from "../../interface"


type AuthAction =
    | { type: "LOGIN_LOADING" }
    | { type: "LOGIN_SUCCESS", payload: string }
    | { type: "LOGIN_ERROR", payload: string }
    | { type: "LOGOUT_LOADING" }
    | { type: "LOGOUT_SUCCESS" }
    | { type: "LOGOUT_ERROR" }

export const authReducer = (state: AuthState, action: AuthAction) => {

    switch (action.type) {
        case "LOGIN_LOADING":
            return { ...state, loading: true, errorMessage: undefined }
        case "LOGIN_SUCCESS":
            return { ...state, token: action.payload, loading: false, errorMessage: undefined }
        case "LOGIN_ERROR":
            return { ...state, errorMessage: action.payload, loading: false }
        case "LOGOUT_LOADING":
            return { ...state, loading: true }
        case "LOGOUT_SUCCESS":
            return { ...state, token: '', loading: false }
        case "LOGOUT_ERROR":
            return { ...state, errorMessage: "not logout" }
        default:
            return { ...state }
    }
}
