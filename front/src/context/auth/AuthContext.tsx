import { createContext } from 'react';
import { AuthState, IUser } from '../../interface';
import { IUserRegister, IUserLogin } from '../../interface/auth';

export type AuthContextProps = {
	state: AuthState;
	login: (userLogin: IUserLogin) => Promise<IUser | undefined>;
	register: (userRegister: IUserRegister) => Promise<IUser | undefined>;
	logout: () => void;
	updateAvatar: (avatar: any) => void;
};

export const AuthContext = createContext<AuthContextProps>(
	{} as AuthContextProps
);
