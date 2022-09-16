import axios from 'axios'
import { IUser, IUserLogin } from "../interface";
import { axiosIn } from './utils';


interface ILoginApi {
    token: string;
}



export const loginApi = async (user: IUserLogin) => axiosIn.post<ILoginApi>(`/auth/signin`, user);

export const logoutApi = async () => {
    return axiosIn.post('/auth/logout')

}

