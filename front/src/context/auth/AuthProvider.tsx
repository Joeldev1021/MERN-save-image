/* eslint-disable no-unused-vars */
import { useReducer } from 'react';
import { loginApi, logoutApi } from '../../api';
import { AuthState, IUserLogin } from '../../interface';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

interface Props {
	children: JSX.Element | JSX.Element[];
}

const INITIAL_STATE: AuthState = {
	token: localStorage.getItem('token') || '',
	loading: false,
	errorMessage: undefined,
};

export const AuthProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

	const login = async (userLogin: IUserLogin) => {
		/* 	"email": "joel@gmail.com",
			"password": "1234" */
		dispatch({ type: 'LOGIN_LOADING' });
		try {
			const res = await loginApi(userLogin);
			if (res.token) {
				dispatch({ type: 'LOGIN_SUCCESS', payload: res.token });
				localStorage.setItem('token', res.token);
			}
		} catch (error) {
			console.log('error catch ', error);
			if (error instanceof Error) {
				dispatch({ type: 'LOGIN_ERROR', payload: error.message });
			}
		}
	};

	const logout = async () => {
		const token = localStorage.getItem('token');
		try {
			const response = await logoutApi(token!);
			if (response.token) {
				dispatch({ type: 'LOGOUT_SUCCESS' });
				localStorage.setItem('token', '');
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
