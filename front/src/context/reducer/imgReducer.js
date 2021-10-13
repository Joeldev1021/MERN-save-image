import { ActionImg } from "../actions/ActionImg";

export default function imgReducer(state, action) {
    console.log("state", state);
    console.log("action", action);
  switch (action.type) {
    case ActionImg.GET_IMG:
      return { 
          ...state, 
          images: action.payload
          };

    case ActionImg.ADD_IMG:
      return { 
          ...state,
          images: [...state.images, action.payload]
      };

    case ActionImg.ADD_IMG_ERROR: 
    return {
      ...state,
      errorNoteMessage: action.payload.message
    }

    case ActionImg.DELETE_IMG:
      return { 
          ...state, images: state.images.filter(img=> img._id !== action.payload)
       };

    case ActionImg.EDITE_IMG__ERROR:
      return { 
          ...state, 
          errorNoteMessage: action.payload.message
       };

    default:
      return { massage: "default" };
  }
};
