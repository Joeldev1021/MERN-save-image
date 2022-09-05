import axios from 'axios'
import { IUserLogin } from "../interface";


interface ILoginApi {
    token: string;
}

export const loginApi = async (user: IUserLogin) => await axios.post<ILoginApi>(`http://localhost:5000/auth/signin`, user);

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
