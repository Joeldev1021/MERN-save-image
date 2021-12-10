import { createContext, useContext, useEffect, useReducer } from "react";
import { commentApi } from "../../api/commentApi";
import { apiUploadImg, getApiImg, getApiDeleteImg, apiUpdateImg, getAllApiImg, getApiCommentImgById } from "../../api/imgApi";
import { apiAddLikes } from "../../api/likeApi";
import { ActionImg } from "../actions/ActionImg";
import imgReducer from "../reducer/imgReducer";
import { GlobalUserContext } from "./GobalUserProvider";

export const ImgContext = createContext();

const initialValues = {
  commentByImg: "",
  images: [],
  allImg: [],
  errorImgMessage: null
};

const ImgProvider = ({ children }) => {
  const [state, dispatch] = useReducer(imgReducer, initialValues);
  const { token, isLogined } = useContext(GlobalUserContext);

  const getCommentImgById = async (id) => {
    console.log(id);
    try {
      const res = await getApiCommentImgById(id, token);
      dispatch({
        // type: ActionImg.GET_IMG_BY_ID,
        type: ActionImg.GET_COMMENTS,
        payload: res.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  const getImg = async () => {
    try {
      const img = await getApiImg(token);
      dispatch({
        type: ActionImg.GET_IMG,
        payload: img.data
      });
    } catch (error) {
      console.log(error);
    }
  };
  const getAllImg = async () => {
    try {
      const img = await getAllApiImg(token);
      console.log(img);
      dispatch({
        type: ActionImg.GET_ALL_IMG,
        payload: img.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImg = async (data, token) => {
    try {
      const img = await apiUploadImg(data, token);
      dispatch({
        type: ActionImg.ADD_IMG,
        payload: img.data
      });
    } catch (error) {
      console.log(error);
    }
  };

  const editeImg = async (img, token) => {
    try {
      await apiUpdateImg(img, token);
      dispatch({
        type: ActionImg.UPDATE_IMG,
        payload: img
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteImg = async (id) => {
    try {
      const imgDelete = await getApiDeleteImg(id, token);
      dispatch({
        type: ActionImg.DELETE_IMG,
        payload: imgDelete.data._id
      });
    } catch (error) {
      console.log(error);
    }
  };

  /// add likes img
  const addLike = async (imgId, userId) => {
    try {
      await apiAddLikes(imgId, token);
      dispatch({
        type: ActionImg.LIKE_IMG,
        payload: {
          imgId,
          userId
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async (imgId, comment) => {
    try {
      const resComment = await commentApi(imgId, comment, token);
      dispatch({
        type: ActionImg.COMMENT_IMG,
        payload: {
          commentId: resComment.data._id,
          imgId
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getImg();
    getAllImg();
  }, [isLogined]);

  return (
    <ImgContext.Provider
      value={{
        ...state,
        uploadImg,
        editeImg,
        deleteImg,
        addComment,
        getCommentImgById,
        addLike
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};

export default ImgProvider;
