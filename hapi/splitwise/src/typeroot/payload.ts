import User from "@models/User";
import { SPLIT_TYPE } from "./models";

export interface ExpensePayload {
    created_by: string;
    shares: Array<Share>;
    amount: number;
    title: string;
    note: string;
    splitType: SPLIT_TYPE;
    date: number;

}

export interface Share {
    userID: string;
    paid: number;
    owed: number;
}

export interface ShareInfo {
    net: number;
    paid: number;
    owed: number;
    user: User;
}

export interface Members {
    //  will not keep id as new users could be invited
    // id: string, 
    first_name: string;
    last_name?: string;
    email: string,
}

export interface GroupPayload {
    name: string;
    admin: string;
    members: Array<Members>
}