import { UserService } from "@services/user";

export class UserDao {
  static async getUser(userId: string) {
    console.log(userId);
    const user = await UserService.get(userId);
    return user;
  }
}
