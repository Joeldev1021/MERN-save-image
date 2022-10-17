import { IUser } from "../interface"
import { axiosInter } from "./utils"

export const getProfileApi = async () => {
    return axiosInter.get<IUser>('/user/profile')
}

export const updateAvatarApi = async (id: string, avatar: File) => {
    return axiosInter.post<IUser>(`/user/update/avatar/${id}`, avatar, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
