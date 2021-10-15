import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import { useHistory } from "react-router";
import {apiUploadImg, getApiImg, getApiDeleteImg, apiUpdateImg} from "../../api/imgApi";
import { ActionImg } from "../actions/ActionImg";
import imgReducer from "../reducer/imgReducer";
import { GlobalUserContext } from "./GobalUserProvider";

export const ImgContext = createContext();

const initialValues = {
  images: [],
  errorImgMessage: null,
};



const ImgProvider = ({ children }) => {
  const [state, dispatch] = useReducer(imgReducer, initialValues);

  const history = useHistory();
  const { token, isLogined  } = useContext(GlobalUserContext);

  const getImg = async () => {
    try {
      const img = await getApiImg(token)
      dispatch({
        type: ActionImg.GET_IMG,
        payload: img.data
      })
    } catch (error) {
      console.log(error)
    }
  };

  const uploadImg = async (data, token) => {
    try {
     const img = await apiUploadImg(data, token)  
      dispatch({ 
        type: ActionImg.ADD_IMG,
         payload:img.data
        })
    } catch (error) {
      console.log(error)
    }
  };

  const editeImg = async (img, token) => {
     try {
       const imgUpdate = await apiUpdateImg(img, token)
       dispatch({
         type: ActionImg.UPDATE_IMG,
         payload:img
       })
     } catch (error) {
       console.log(error)
     }
  };

  const deleteImg = async (id) => {
      try {
        const imgDelete = await getApiDeleteImg(id, token)
        dispatch({ 
          type: ActionImg.DELETE_IMG,
          payload: imgDelete.data._id
        })
      } catch (error) {
        console.log(error)
      }
  };

  useEffect(() => {
    getImg();
  }, [isLogined]);

  return (
    <ImgContext.Provider
      value={{
        ...state,
        uploadImg,
        editeImg,
        deleteImg
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};

export default ImgProvider;

