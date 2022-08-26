import { AuthState } from "../../interface"


type AuthAction =
    | { type: "LOAD_LOGIN" }
    | { type: "LOAD_LOGIN_SUCCESS", payload: string }
    | { type: "LOAD_LOGIN_ERROR" }

export const authReducer = (state: AuthState, action: AuthAction) => {

    switch (action.type) {
        case "LOAD_LOGIN":
            return { ...state }
        default:
            return { ...state }
    }
}
