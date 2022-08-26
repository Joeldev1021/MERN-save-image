import { AuthState } from "../../interface"


type AuthAction =
    | { type: "LOGIN_LOADING" }
    | { type: "LOGIN_SUCCESS", payload: string }
    | { type: "LOGIN_ERROR" }

export const authReducer = (state: AuthState, action: AuthAction) => {

    switch (action.type) {
        case "LOGIN_LOADING":
            return { ...state, loading: true }
        case "LOGIN_SUCCESS":
            return { ...state, token: action.payload, loading: false }
        case "LOGIN_ERROR":
            return { ...state, error: true, loading: false }
        default:
            return { ...state }
    }
}
