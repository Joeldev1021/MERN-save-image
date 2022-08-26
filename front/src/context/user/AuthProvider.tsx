/* eslint-disable no-unused-vars */
import { useReducer } from 'react';
import { AuthState, IUserLogin } from '../../interface';
import { AuthContext } from './AuthContext';
import { authReducer } from './authReducer';

interface Props {
	children: JSX.Element | JSX.Element[];
}
const INITIAL_STATE: AuthState = {
	token: '',
};

export const AuthProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(authReducer, INITIAL_STATE);

	const login = (userLogin: IUserLogin) => {
		console.log(userLogin);
	};

	return (
		<AuthContext.Provider value={{ state, value: 'hola', login }}>
			{children}
		</AuthContext.Provider>
	);
};
