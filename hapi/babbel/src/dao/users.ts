import * as bcrypt from "bcrypt";

import { ResponseObject } from "@errors/index";
import pgPool from "@services/db";
import { IUser, UserPayload } from "@typeroot/user";
import { USERS_ERRROS } from "@errors/users";

const messages = [];
function randomString() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export async function CreateTable() {
  const query = `
        
        CREATE TABLE IF NOT EXISTS Users (id serial primary key, username varchar(25) UNIQUE, firstname VARCHAR(255), lastname VARCHAR(255), password varchar(255) NOT NULL, profile_picture varchar(255),
         created_at timestamp default current_timestamp);
         INSERT INTO Users (username, firstname, lastname, password, profile_picture) VALUES
        ('prawin', 'praveen', 'kumar', '${await bcrypt.hash("password", 10)}', 'http://0.0.0.0:80/v1/image/image.jpeg')
        ON CONFLICT DO NOTHING;
    `;

  try {
    const res = await pgPool.query(query);

    console.log("Users Table created");
  } catch (err) {
    console.error(err);
  }
}

export async function QueryRow(username: string) : Promise<IUser> {
  const query = "SELECT * FROM Users WHERE username=$1;";

  try {
    const res = await pgPool.query(query, [username]);
    const { rows } = res;
    console.log(rows);
    return rows[0] as IUser;
  } catch (err) {
    console.error(err);
  }
}

export async function QueryAllRows(): Promise<Array<IUser>> {
  const query = "SELECT * FROM Users;";
  try {
    const res = await pgPool.query(query);
    const { rows } = res;
    return rows as Array<IUser>;
  } catch (err) {
    console.log(err.stack);
  }
}

export async function InsertRow(payload: UserPayload): Promise<IUser> {
  const query = "INSERT INTO Users(firstname, lastname, username, password, profile_picture) VALUES ($1, $2, $3, $4, $5) RETURNING firstname, lastname, username, profile_picture;";
  console.log(query);
  try {
    const res = await pgPool.query(query,
      [payload.firstname, payload.lastname, payload.username,
        payload.password, payload.profile_picture]);
    return res.rows[0] as IUser;
  } catch (err) {
    console.log(err.stack);
  }
}

export async function UpdateRow(username: string, updatePayload: UserPayload) {
  const fields = Object.keys(updatePayload).map((key: string) => `${key}='${updatePayload[key]}'`);
  const query = `UPDATE Users SET ${fields.join(" , ")} WHERE username='${username}'`;
  try {
    const res = await pgPool.query(query);
    return res;
  } catch (err) {
    console.log(err.message);
    if (err.message.includes("duplicate key value violates unique constraint")) {
      throw new ResponseObject(USERS_ERRROS.USER_ALREADY_PRESENT);
    }
    console.log(err.stack);
  }
}

export async function DeleteRow(username: string) {
  const query = "DELETE FROM Users WHERE username=$1";
  try {
    const res = await pgPool.query(query, [username]);
  } catch (err) {
    console.log(err.stack);
  }
}

export async function DeleteTable() {
  const query = "DROP TABLE Users";
  try {
    const res = await pgPool.query(query);
    console.log("Dropping table");
  } catch (err) {
    console.log(err.stack);
  }
}
