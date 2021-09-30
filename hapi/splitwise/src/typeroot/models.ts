export enum SPLIT_TYPE {
    EQUAL = 10,
    UNEQUAL = 20,
    PERCENTAGE = 30
}

export enum UserStatus {
    INVITED = 10,
    CONFIRMED = 20,
    DELETED = 30
}

export interface Repayment {
    from: string;
    to: string;
    amount: number;
}