import { IUserLogin } from "../interface";

export const loginApi = async (userLogin: IUserLogin) => {
    const result = await fetch('http://localhost:5000/auth/signin', {
        method: 'POST',
        body: JSON.stringify(userLogin),
        headers: {
            "Content-Type": "application/json"
        },
    });
    return result.json()

}