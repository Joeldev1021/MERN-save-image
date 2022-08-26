/* eslint-disable no-unused-vars */
import { useReducer } from 'react';
import { loginApi } from '../../api';
import { AuthState, IUserLogin } from '../../interface';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

interface Props {
	children: JSX.Element | JSX.Element[];
}
const INITIAL_STATE: AuthState = {
	token: '',
	loading: false,
	error: false,
};

export const AuthProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

	const login = async (userLogin: IUserLogin) => {
		/* 	"email": "joel@gmail.com",
			"password": "1234" */
		dispatch({ type: 'LOGIN_LOADING' });
		const token = await loginApi(userLogin);
		if (token.token) dispatch({ type: 'LOGIN_SUCCESS', payload: token.token });

		if (token.message) dispatch({ type: 'LOGIN_ERROR' });
	};

	return (
		<AuthContext.Provider value={{ state, value: 'hola', login }}>
			{children}
		</AuthContext.Provider>
	);
};
