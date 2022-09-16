import { IUser } from "../interface"
import { axiosIn } from "./utils"

export const getProfileApi = async () => {
    return axiosIn.get<IUser>('/user/profile')
}
