export interface IUserRegister {
    username: string;
    email: string;
    password: string;
    avatar?: string;

}
export interface IUserLogin {
    email: string
    password: string
}