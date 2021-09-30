/* eslint-disable import/no-unresolved */
import Group from "@models/Group";
import User from "@models/User";
import { ExpenseService } from "@services/expense";
import { GroupService } from "@services/group";
import { UserService } from "@services/user";
import { Projections } from "@services/user/projections";
import { GroupPayload, ExpensePayload, ShareInfo } from "@typeroot/payload";
import { ERROR, GROUP_ERRORS, PROFILE_ERRORS } from "./errors";

export class ExpenseDao {

  static async getExpenses(groupId: string, offset: string, limit = 10) {
    const group = await GroupService.getByID(groupId);
    if (!group) throw new ERROR(GROUP_ERRORS.WRONG_GROUPID)

    console.log(group)
    const expenses = await ExpenseService.getExpensesByGroup(groupId, offset, limit)
    return expenses


  }
  static async addExpense(groupId: string, expenseData: ExpensePayload) {

    const group = await GroupService.getByID(groupId);
    if (!group) throw new ERROR(GROUP_ERRORS.WRONG_GROUPID)

    const { shares } = expenseData
    const paidBy = shares.filter(share => share.paid > 0)[0];
    const sharesInfo = await ExpenseService.getSharesInfo(shares)
    const repayments = ExpenseService.calculateRepayments(shares)

    const expense = await ExpenseService.addNewExpense({
      group_id: group.ID,
      amount: expenseData.amount,
      title: expenseData.title,
      note: expenseData.note,
      shares: expenseData.shares,
      split_type: expenseData.splitType,
      created_by: expenseData.created_by,

    })
    return { ...expense, repayments, sharesInfo }

  }

  static async addGroup(groupdata: GroupPayload) {
    const emails = groupdata.members.map(member => member.email)
    const { users, err } = await UserService.batchUsersByEmail(emails)
    console.log(users, err)
    if (err) throw new ERROR(PROFILE_ERRORS.MAX_10_EMAILS)
    let USERS: Array<User> = []
    const addNewUserPromises = []
    groupdata.members.forEach((member, index) => {

      if (!users[index].user) {
        addNewUserPromises.push(UserService.addNewUser(
          {
            ...member,
            invitedBy: groupdata.admin
          }))
      } else {
        USERS.push(users[index].user)
      }

    });
    USERS = [...USERS, ...await Promise.all(addNewUserPromises), groupdata.admin]
    const group: Group = await GroupService.addNewGroup({
      name: groupdata.name,
      admin: groupdata.admin,
      members: USERS.map(user => user.ID)
    })
    return group
  }
}
