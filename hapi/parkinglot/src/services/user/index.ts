import User from "@models/User";
import { mapper } from "@services/db/connection";
import { GoogleCredentials } from "@typeroot/auth";
import { UserInfo } from "@typeroot/models";

export class UserService {
  static async get(userId: string): Promise<User | null> {
    const user = await mapper
      .get(Object.assign(new User(), { user_id: userId }))
      .catch((err) => {
        console.log(err);
        return null;
      });
    return user;
  }

  static async getByEmail(
    email: string
  ): Promise<{ user?: User; err?: string }> {
    try {
      const query = await mapper.query(
        User,
        { email },
        {
          indexName: "email",
        }
      );
      const users = [];
      for await (let item of query) {
        users.push(item);
      }
      if (users.length === 0) return { err: "no user found" };
      return { user: users[0] };
    } catch (err) {
      console.log(err.message);
      return { err: err.message };
    }
  }

  static async register(credential: GoogleCredentials) {
    const {
      name: { given_name: first_name, family_name: last_name },
      email,
    } = credential.profile;
    const { user, err } = await this.getByEmail(email);
    if (user) {
      return user;
    }
    const { picture } = credential.profile.raw;

    const riderInfo: UserInfo = {
      first_name,
      last_name,
      email,
      picture,
    };
    const new_rider = await mapper.put(
      Object.assign(new User(), { ...riderInfo })
    );
    return new_rider;
  }
}
