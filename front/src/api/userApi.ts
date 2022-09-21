import { IUser } from "../interface"
import { axiosInter } from "./utils"

export const getProfileApi = async () => {
    return axiosInter.get<IUser>('/user/profile')
}
