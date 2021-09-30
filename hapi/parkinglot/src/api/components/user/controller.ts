/* eslint-disable import/no-unresolved */
import { Request, ResponseToolkit, Util as HapiUtil } from "@hapi/hapi";

import { UserDao } from "./dao";

export class UserController {
  static async getUser(request: Request, h: ResponseToolkit) {
    const { user_id: userId } = request.auth.credentials.user;
    try {
      const user = await UserDao.getUser(userId);
      return user;
    } catch (err) {
      return h.response({ message: err.message }).code(400);
    }
  }
}
