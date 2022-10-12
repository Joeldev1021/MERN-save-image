import { IUserLogin, IUserRegister } from '../interface/auth';
import { axiosInter } from './utils';


interface ILoginApi {
    token: string;
}

export const loginApi = async (user: IUserLogin) => axiosInter.post<ILoginApi>(`/auth/signin`, user);
export const registerApi = async (user: IUserRegister) => axiosInter.post<ILoginApi>(`/auth/signup`, user);

export const logoutApi = async () => {
    return axiosInter.post('/auth/logout')
}

export const refreshTokenApi = async () => axiosInter.post<ILoginApi>('/auth/refresh')

