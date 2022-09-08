import axios from 'axios'
import { IUser, IUserLogin } from "../interface";


interface ILoginApi {
    token: string;
}



export const loginApi = async (user: IUserLogin) => axios.post<ILoginApi>(`http://localhost:5000/auth/signin`, user);

export const logoutApi = async (token: string) => {
    const response = await fetch('http://localhost:5000/auth/logout', {
        method: 'POST',
        headers: new Headers({
            'Authorization': token,
            'Content-Type': 'application/json'
        }),
    })
    return response.json()
}

export const getProfileApi = async (token: string) => {
    return axios.get<IUser>('http://localhost:5000/user/profile', {
        headers: {
            'Authorization': token
        }
    })
}
