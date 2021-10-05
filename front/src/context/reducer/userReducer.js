import { ActionsUser } from "../actions/ActionUser";


export default function userReducer(state, action) {
   console.log('action ', action)
  switch (action.type) {
    case ActionsUser.SIGN_UP_USER : 
    return {
      ...state,
      user: action.payload.user,
      token : action.payload.token,
      isLogined: true
    }
    case ActionsUser.SIGN_UP_ERROR:
      return { }
    case ActionsUser.SIGN_IN_USER : 
    return {
      ...state,
      user: action.payload.user,
      token : action.payload.token,
      isLogined: true
      
    }

    case ActionsUser.SIGN_IN_ERROR : 
    return {
      ...state,
      errorMessage: action.payload.message,
    }

    
    default:
      return { massage: "default" };
  }
};
