import { IUser } from "./user";

export interface LoginParams{
    username: string;
    password: string;
}

export interface IUserCredentials {
    username: string;
    uid: number
}
export interface ValidationResponse {
    valid: boolean;
    credentials?: IUser;
}
