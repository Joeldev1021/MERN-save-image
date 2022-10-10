import { useEffect, useReducer } from 'react';
import { loginApi, logoutApi, refreshTokenApi } from '../../api/authApi';
import { getProfileApi, updateAvatarApi } from '../../api/userApi';
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
				localStorage.setItem('token', data.token);

				const resUser = await getProfileApi();
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
		try {
			const response = await logoutApi();
			console.log(response.data);
			if (response.data) {
				dispatch({ type: 'LOGOUT_SUCCESS' });
				localStorage.setItem('token', '');
				localStorage.setItem('user', '');
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
			console.log(error);
		}
	};

	useEffect(() => {
		refresToken();
	}, []);

	return (
		<AuthContext.Provider value={{ state, login, logout, updateAvatar }}>
			{children}
		</AuthContext.Provider>
	);
};
