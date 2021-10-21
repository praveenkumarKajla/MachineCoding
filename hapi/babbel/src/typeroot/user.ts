export interface IUser {
    id: number;
    firstname: string;
    lastname: string;
    "profile_picture": string;
    username: string;
    password: string

}

export interface UserPayload {
    firstname?: string;
    lastname?: string;
    username?: string;
    password?: string;
    "profile_picture"?: string;
    "compare_password"?:string
}
