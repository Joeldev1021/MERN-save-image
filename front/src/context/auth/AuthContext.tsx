import { createContext } from 'react';
import { AuthState, IUserLogin } from '../../interface';

export type AuthContextProps = {
	state: AuthState;
	login: (userLogin: IUserLogin) => void;
	logout: () => void;
	updateAvatar: (avatar: any) => void;
};

export const AuthContext = createContext<AuthContextProps>(
	{} as AuthContextProps
);
