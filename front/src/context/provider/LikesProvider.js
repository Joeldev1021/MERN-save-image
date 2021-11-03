import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useHistory } from "react-router";

import likeReducer from "../reducer/likeReducer";

import { GlobalUserContext } from "./GobalUserProvider";

export const LikesContext = createContext();

const initialValues = {
  likes: [],
  errorLikes: null
};

const LikesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(likeReducer, initialValues);

  const history = useHistory();
  const { token, isLogined } = useContext(GlobalUserContext);

//  const addLike =async(id)=> {
   
//     try {
//       const like =await apiAddLikes(id, token)
//       console.log(like)
//     } catch (error) {
//       console.log(error)
//     }
//  }


  return (
    <LikesContext.Provider
      value={{
        ...state,
      
        // removeLikes,
        // getAllLikes,
        // getLike
      }}
    >
      {children}
    </LikesContext.Provider>
  );
};

export default LikesProvider;
