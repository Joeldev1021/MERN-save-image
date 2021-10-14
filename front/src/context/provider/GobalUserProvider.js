import { createContext, useReducer } from "react";
import { authSignUpApi, getProfileUser, authSignInApi } from "../../api/authApi";
import { ActionsUser } from "../actions/ActionUser";
import userReducer from "../reducer/userReducer";
import { useHistory }  from 'react-router-dom'


export const GlobalUserContext = createContext();

const initialValues = {
  isLogined: JSON.parse(localStorage.getItem("user"))? true: false,
  user: '' || JSON.parse(localStorage.getItem("user")),
  token: null|| localStorage.getItem('token'),
  isLoading: false,
  errorMessage: null
};

const GobalUserProvider = ({ children }) => {
  const history = useHistory()
  const [state, dispatch] = useReducer(userReducer, initialValues);

  const signUpUser = async (user) => {
    try {
      const token = await authSignUpApi(user)
        if(token){

          localStorage.setItem('token', token)
          const resUser = await getProfileUser(token)
          localStorage.setItem('user', JSON.stringify(resUser.data.user))
          dispatch({
            type: ActionsUser.SIGN_UP_USER,
            payload: {
              user: resUser.data.user, 
              token: token,
            }
          })
          history.push('/')
        }
    } catch (error) {
      
      dispatch({ 
        type: ActionsUser.SIGN_UP_ERROR,
        payload: error.response.data
      })
    }
  
  };

  const signInUser = async (user) => {
    try {
      const res = await authSignInApi(user)
      const {token} = res.data
        if(token){
          localStorage.setItem('token', token)
          const resUser = await getProfileUser(token)
          console.log(resUser)
          localStorage.setItem('user', JSON.stringify(resUser.data.user))
          dispatch({
            type: ActionsUser.SIGN_IN_USER,
            payload: {
              user: resUser.data.user, 
              token: token,
            }
          })
          history.push('/')
        }

    } catch (error) {
      console.log(error.response.data)
      dispatch({
        type: ActionsUser.SIGN_IN_ERROR,
        payload: error.response.data
      })
     
    }
  };

  return (
    <GlobalUserContext.Provider
      value={{
        ...state,
        signUpUser,
        signInUser,
      }}
    >
      {children}
    </GlobalUserContext.Provider>
  );
};

export default GobalUserProvider;
