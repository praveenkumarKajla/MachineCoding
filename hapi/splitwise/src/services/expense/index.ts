import Expense from "@models/Expense";
import { mapper } from "@services/db/connection";
import { UserService } from "@services/user";
import { Projections } from "@services/user/projections";
import { Repayment, SPLIT_TYPE } from "@typeroot/models";
import { Share, ShareInfo } from "@typeroot/payload";


export interface ExpenseInfo {
    group_id: string;
    amount: number;
    title: string;
    note: string
    shares: Array<Share>;
    split_type: SPLIT_TYPE;
    created_by: string;
}

export class ExpenseService {

    static calculateRepayments(shares: Array<Share>): Array<Repayment> {

        const paidBy = shares.filter(share => share.paid > 0)[0];
        const repayments = shares
            .filter(share => share.userID !== paidBy.userID)
            .map(share => ({ from: share.userID, to: paidBy.userID, amount: share.owed }))
        return repayments

    }

    static async getSharesInfo(shares: Array<Share>) {
        const users = await UserService.batchUsers(shares.map(share => share.userID), true, Projections.BASIC)
        const sharesInfo = shares.map(
            (share): ShareInfo => (
                {
                    net: share.paid - share.owed,
                    paid: share.paid,
                    owed: share.owed,
                    user: users[share.userID]
                }))
        return sharesInfo
    }


    static async addNewExpense(expenseInfo: ExpenseInfo) {
        console.log(expenseInfo)
        const toPut = Object.assign(new Expense(), {
            ...expenseInfo
        })
        const expense = await mapper.put(toPut)
        return expense;
    }

    static async getExpensesByGroup(groupId: string, offset: string, limit: number) {
        let start_key: Expense;
        if (limit && limit > 10) limit = 10;
        if (offset) {
            const keys = offset.split(":");
            if (keys.length !== 2) throw new Error("Invalid request");
            start_key = Object.assign(new Expense(), {
                ID: keys[0],
                group_id: groupId,
                created_at: keys[1],
            });
        }
        const attr: any = {
            indexName: "group",
            limit,
            scanIndexForward: false,
            startKey: start_key,
        };

        const data = [];
        let result = [];

        const paginator = mapper
            .query(Expense, { group_id: groupId }, attr)
            .pages();

        for await (const expense of paginator) {
            result = [...result, ...expense];
        }
        for (let i = 0; i < result.length; i++) {
            const expense = result[i];
            const sharesInfo = await this.getSharesInfo(expense.shares)
            const repayments = await this.calculateRepayments(expense.shares)
            data.push({ ...expense, sharesInfo, repayments })
        }
        return {
            data,
            next_offset: paginator.lastEvaluatedKey
                ? `${paginator.lastEvaluatedKey.ID}:${paginator.lastEvaluatedKey.created_at}`
                : null,
        }
    }
}
