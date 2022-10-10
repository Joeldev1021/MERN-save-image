import { IUserLogin } from "../interface";
import { axiosInter } from './utils';


interface ILoginApi {
    token: string;
}



export const loginApi = async (user: IUserLogin) => axiosInter.post<ILoginApi>(`/auth/signin`, user);

export const logoutApi = async () => {
    return axiosInter.post('/auth/logout')
}

export const refreshTokenApi = async () => axiosInter.post<ILoginApi>('/auth/refresh')

