import { ActionsUser } from "../actions/ActionUser";

export default function userReducer (state, action) {
  console.log("action ", action);
  switch (action.type) {
    case ActionsUser.SIGN_UP_USER :
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        errorMessage: null,
        isLogined: true
      };

    case ActionsUser.SIGN_UP_ERROR:
      return {
        ...state,
        isLogined: false,
        errorMessage: action.payload.message
      };

    case ActionsUser.SIGN_IN_USER :
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isLogined: true,
        errorMessage: null
      };

    case ActionsUser.SIGN_IN_ERROR :
      return {
        ...state,
        errorMessage: action.payload.message,
        isLogined: false
      };

    default:
      return { massage: "default" };
  }
};
