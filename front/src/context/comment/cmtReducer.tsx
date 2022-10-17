import { ICmtState, IUser } from '../../interface';

type CmtAction =
	| { type: 'SIGNUP_LOADING' }
	| { type: 'SIGNUP_SUCCESS'; payload: { token: string; user: IUser } }
	| { type: 'SIGNUP_ERROR'; payload: string }
	| { type: 'LOGIN_LOADING' }
	| { type: 'LOGIN_SUCCESS'; payload: { token: string; user: IUser } }
	| { type: 'LOGIN_ERROR'; payload: string }
	| { type: 'LOGOUT_LOADING' }
	| { type: 'LOGOUT_SUCCESS' }
	| { type: 'LOGOUT_ERROR' }
	| { type: 'LOADING_REFRESH_TOKEN' }
	| { type: 'LOADING_REFRESH_TOKEN_SUCCESS'; payload: { token: string } }
	| { type: 'LOADING_REFRESH_TOKEN_ERROR' }
	| { type: 'LOADING_UPDATE_AVATAR' }
	| { type: 'LOADING_UPDATE_AVATAR_SUCCESS'; payload: IUser }
	| { type: 'LOADING_UPDATE_AVATAR_ERROR' };

export const cmtReducer = (state: ICmtState, action: CmtAction) => {
	switch (action.type) {
		/* ==== signup ===== */
		case 'SIGNUP_LOADING':
			return {
				...state,
			};

		default:
			return { ...state };
	}
};
