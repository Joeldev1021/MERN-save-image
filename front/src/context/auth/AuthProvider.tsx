import { AxiosError } from 'axios';
import { useEffect, useReducer } from 'react';
import {
	loginApi,
	logoutApi,
	refreshTokenApi,
	registerApi,
} from '../../api/authApi';
import { getProfileApi, updateAvatarApi } from '../../api/userApi';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';
import { AuthState, IUser } from '../../interface';
import { ErrorMessage } from '../../interface/error';
import { IUserLogin, IUserRegister } from '../../interface/auth';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const localUser = localStorage.getItem('user');
const user = localUser ? JSON.parse(localUser) : null;

const INITIAL_STATE: AuthState = {
	token: localStorage.getItem('token') || null,
	user: user || null,
	loading: false,
	errorMessage: undefined,
};

export const AuthProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

	const register = async (user: IUserRegister): Promise<IUser | undefined> => {
		dispatch({ type: 'SIGNUP_LOADING' });
		try {
			const { data } = await registerApi(user);
			console.log(data);
			if (data.token) {
				localStorage.setItem('token', data.token);
				const resUser = await getProfileApi();
				if (resUser.data) {
					dispatch({
						type: 'SIGNUP_SUCCESS',
						payload: { token: data.token, user: resUser.data },
					});
					localStorage.setItem('user', JSON.stringify(resUser.data));
				}
				return resUser.data;
			}
		} catch (error) {
			const err = error as AxiosError<ErrorMessage>;
			if (err.response) {
				dispatch({
					type: 'SIGNUP_ERROR',
					payload: err.response.data.errorMessage,
				});
				return undefined;
			}
		}
	};

	const login = async (userLogin: IUserLogin): Promise<IUser | undefined> => {
		/* 	"email": "joel@gmail.com",
			"password": "1234"
			pep@gmail.com
			"password" "password"
			 */
		dispatch({ type: 'LOGIN_LOADING' });
		try {
			const { data } = await loginApi(userLogin);
			if (data.token) {
				localStorage.setItem('token', data.token);

				const resUser = await getProfileApi();
				if (resUser.data) {
					console.log(resUser.data);
					localStorage.setItem('user', JSON.stringify(resUser.data));
					dispatch({
						type: 'LOGIN_SUCCESS',
						payload: { token: data.token, user: resUser.data },
					});
					return resUser.data;
				}
			}
		} catch (error) {
			const err = error as AxiosError<ErrorMessage>;

			if (err.response) {
				localStorage.removeItem('user');
				localStorage.removeItem('token');
				dispatch({
					type: 'LOGIN_ERROR',
					payload: err.response?.data.errorMessage,
				});
				return undefined;
			}
		}
	};

	const logout = async () => {
		dispatch({ type: 'LOGOUT_LOADING' });
		try {
			const response = await logoutApi();
			if (response.data) {
				dispatch({ type: 'LOGOUT_SUCCESS' });
				localStorage.removeItem('token');
				localStorage.removeItem('user');
			}
		} catch (error) {
			dispatch({ type: 'LOGOUT_ERROR' });
		}
	};

	const updateAvatar = async (avatar: File) => {
		const id = state.user?._id || '';
		dispatch({ type: 'LOADING_UPDATE_AVATAR' });
		try {
			const response = await updateAvatarApi(id, avatar);
			if (response.data) {
				dispatch({
					type: 'LOADING_UPDATE_AVATAR_SUCCESS',
					payload: response.data,
				});
				localStorage.setItem('user', JSON.stringify(response.data));
			}
		} catch (error) {
			console.log(error);
		}
	};

	const refresToken = async () => {
		dispatch({ type: 'LOADING_REFRESH_TOKEN' });
		try {
			const { data } = await refreshTokenApi();
			if (data.token) {
				dispatch({
					type: 'LOADING_REFRESH_TOKEN_SUCCESS',
					payload: { token: data.token },
				});

				localStorage.setItem('token', data.token);
			}
		} catch (error) {
			const err = error as AxiosError<ErrorMessage>;
			if (err.response?.data) {
				localStorage.removeItem('user');
				localStorage.removeItem('token');
				dispatch({
					type: 'LOGIN_ERROR',
					payload: err.response?.data.errorMessage,
				});
			}
		}
	};

	useEffect(() => {
		if (state.token) {
			refresToken();
		}
	}, []);

	return (
		<AuthContext.Provider
			value={{ state, login, register, logout, updateAvatar }}
		>
			{children}
		</AuthContext.Provider>
	);
};
