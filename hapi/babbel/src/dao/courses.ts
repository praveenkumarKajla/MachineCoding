import * as _ from "lodash";

import pgPool, { nestQuerySingle } from "@services/db";
import { CoursePayload, ICourse } from "@typeroot/course";

export async function CreateTable() {
  const query = `
        CREATE TABLE IF NOT EXISTS Courses (uid SERIAL PRIMARY KEY, name varchar(255), current_active_lesson INT, owner_id INT NOT NULL,
            CONSTRAINT FK_owner FOREIGN KEY (owner_id)
            REFERENCES Users("id") ON DELETE CASCADE);
    `;

  try {
    const res = await pgPool.query(query);

    console.log("Courses Table created ");
  } catch (err) {
    console.error(err);
  }
}

export async function QueryRow(uid: string) : Promise<ICourse> {
  const query = `SELECT *,  ${nestQuerySingle(
    `
        SELECT *
        FROM users u WHERE u.id = Courses.owner_id
      `,
  )} AS owner FROM Courses where Courses.uid=${uid};`;

  try {
    const res = await pgPool.query(query);
    const { rows } = res;
    return rows[0] as ICourse;
  } catch (err) {
    console.error(err);
  }
}

export async function QueryAllRows(useruid?: number | string): Promise<Array<ICourse>> {
  const query = ` 
  SELECT
    co.uid,
    co.name,
    ${nestQuerySingle(
    `
        SELECT *
        FROM users u WHERE u.id = co.owner_id
      `,
  )} AS user,
    coalesce(
      (
        SELECT array_to_json(array_agg(row_to_json(x)))
        FROM (
          SELECT *
          FROM lessons le
          WHERE le.course_id = co.uid
        ) x
      ),
      '[]'
    ) AS lessons
  FROM courses co ${useruid ? `where co.owner_id=${useruid}` : ""};
  `;
  try {
    const res = await pgPool.query(query);
    const { rows } = res;
    return rows as Array<ICourse>;
  } catch (err) {
    console.log(err.stack);
  }
}

export async function InsertRow(payload: CoursePayload): Promise<ICourse> {
  const query = "INSERT INTO Courses( name, owner_id) VALUES ($1, $2) RETURNING uid, name, current_active_lesson, owner_id;";
  try {
    const res = await pgPool.query(query,
      [payload.name, payload.owner_id]);
    return res.rows[0] as ICourse;
  } catch (err) {
    console.log(err.stack);
  }
}

export async function UpdateRow(uid: string, updatePayload: CoursePayload) {
  const fields = Object.keys(updatePayload).map((key: string) => `${key}='${updatePayload[key]}'`);
  const query = `UPDATE Courses SET ${fields.join(" , ")} WHERE uid='${uid}'`;
  try {
    const res = await pgPool.query(query);
    return res;
  } catch (err) {
    console.log(err.stack);
  }
}

export async function DeleteRow(uid: string) {
  const query = "DELETE FROM Courses WHERE uid=$1";
  try {
    const res = await pgPool.query(query, [uid]);
  } catch (err) {
    console.log(err.stack);
  }
}

export async function DeleteTable() {
  const query = "DROP TABLE Courses";
  try {
    const res = await pgPool.query(query);
    console.log("Dropping table");
  } catch (err) {
    console.log(err.stack);
  }
}
