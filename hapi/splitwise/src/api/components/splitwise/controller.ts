/* eslint-disable import/no-unresolved */
import { Request, ResponseToolkit, Util as HapiUtil } from "@hapi/hapi";
import { ExpensePayload, GroupPayload } from "@typeroot/payload";

import { ExpenseDao } from "./dao";
import validate from "./validate";

export class ExpenseController {

  static async getExpenses(request: Request, h: ResponseToolkit) {
    const params: HapiUtil.Dictionary<string> = request.params || {};
    const { value, error: error2 } = validate.get.expenses.params.validate(params);
    if (error2) {
      return h.response({ message: error2.message, params }).code(400);
    }
    const { groupId } = value;

    const { query } = request;

    const limit = parseInt(String(query.limit), 10) || 10;
    let offset = String(query.offset) || "";
    if (offset === "undefined") offset = "";

    try {
      const expenses = await ExpenseDao.getExpenses(groupId, offset, limit);
      return expenses
    }
    catch (err) {
      return h.response({ message: err.message }).code(400)
    }


  }


  static async addExpense(request: Request, h: ResponseToolkit) {
    const params: HapiUtil.Dictionary<string> = request.params || {};
    const { value, error: error2 } = validate.post.expense.params.validate(params);
    if (error2) {
      return h.response({ message: error2.message, params }).code(400);
    }
    const { groupId } = value;

    const payload = request.payload as ExpensePayload;
    const { value: groupdata, error: error1 } = validate.post.expense.payload.validate(payload);
    if (error1) {
      return h.response({ message: error1.message, payload }).code(400);
    }

    try {
      const response = await ExpenseDao.addExpense(groupId, groupdata)
      return response
    }
    catch (error) {
      console.error(error.message)
      return h.response({ message: error.message }).code(400);
    }


  }

  static async addGroup(request: Request, h: ResponseToolkit) {
    console.log(this)
    const payload = request.payload as GroupPayload;
    const { value: groupdata, error: error1 } = validate.post.groups.payload.validate(payload);
    if (error1) {
      return h.response({ message: error1.message, payload }).code(400);
    }

    try {
      const response = await ExpenseDao.addGroup(groupdata)
      return response
    }
    catch (err) {
      console.log(err)
      return h.response({ message: err.message, payload }).code(400);
    }


  }
}
