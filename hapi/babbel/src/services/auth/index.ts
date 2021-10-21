import * as bcrypt from "bcrypt";

import * as userDao from "@dao/users";
import { ValidationResponse } from "@typeroot/auth";
import { IUser } from "@typeroot/user";

export async function validateFunc(session: Record<string, unknown>) : Promise<ValidationResponse> {
  const user: IUser = await userDao.QueryRow(session.username as string);
  const isEqual = await bcrypt.compare(session.password as string, user.password);
  if (isEqual) {
    return { valid: true, credentials: user };
  }
  return { valid: false };
}
