/* eslint-disable no-unused-vars */
import axios, { AxiosError } from 'axios';
import { useReducer } from 'react';
import { getProfileApi, loginApi, logoutApi } from '../../api/authApi';
import { AuthState, IUserLogin } from '../../interface';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const localUser = localStorage.getItem('user');
const user = localUser ? JSON.parse(localUser) : null;

const INITIAL_STATE: AuthState = {
	token: localStorage.getItem('token') || '',
	user: user || null,
	loading: false,
	errorMessage: undefined,
};

export const AuthProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

	const login = async (userLogin: IUserLogin) => {
		/* 	"email": "joel@gmail.com",
			"password": "1234"
			pep@gmail.com
			"password" "password"
			 */
		dispatch({ type: 'LOGIN_LOADING' });
		try {
			const { data } = await loginApi(userLogin);
			if (data.token) {
				const resUser = await getProfileApi(data.token);
				localStorage.setItem('token', data.token);

				if (resUser.data) {
					dispatch({
						type: 'LOGIN_SUCCESS',
						payload: { token: data.token, user: resUser.data },
					});
					localStorage.setItem('user', JSON.stringify(resUser.data));
				}
			}
		} catch (error) {
			const err = error as any;
			dispatch({
				type: 'LOGIN_ERROR',
				payload: err.response?.data.errorMessage,
			});
		}
	};

	const logout = async () => {
		const token = localStorage.getItem('token');
		try {
			const response = await logoutApi(token!);
			if (response.token) {
				dispatch({ type: 'LOGOUT_SUCCESS' });
				localStorage.setItem('token', '');
				localStorage.setItem('user', '');
			}
		} catch (error) {
			dispatch({ type: 'LOGOUT_ERROR' });
		}
	};

	return (
		<AuthContext.Provider value={{ state, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
