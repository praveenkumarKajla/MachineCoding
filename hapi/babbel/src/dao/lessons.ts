import pgPool, { nestQuerySingle } from "@services/db";
import { ILesson, LessonPayload } from "@typeroot/lesson";

const messages = [];
function randomString() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
export async function CreateTable() {
  const query = `
        CREATE TABLE IF NOT EXISTS Lessons (uid SERIAL PRIMARY KEY, course_id INT NOT NULL,  name varchar(255), language_code VARCHAR(2) NOT NULL, text TEXT,
            CONSTRAINT FK_language_code FOREIGN KEY (language_code)
            REFERENCES Languages("code") ON DELETE CASCADE,
            CONSTRAINT fk_course FOREIGN KEY (course_id) 
            REFERENCES courses(uid)
            );
    `;

  try {
    const res = await pgPool.query(query);

    console.log("Lessons Table created ");
  } catch (err) {
    console.error(err);
  }
}

export async function QueryRow(uid: string) : Promise<ILesson> {
  const query = `SELECT *,  ${nestQuerySingle(
    `
        SELECT *
        FROM courses c WHERE c.uid = Lessons.course_id
      `,
  )} AS course FROM Lessons where Lessons.uid=${uid};`;
  try {
    const res = await pgPool.query(query);
    const { rows } = res;
    return rows[0] as ILesson;
  } catch (err) {
    console.error(err);
  }
}

export async function QueryAllRows(): Promise<Array<ILesson>> {
  const query = "SELECT * FROM Lessons ORDER BY uid;";
  try {
    const res = await pgPool.query(query);
    console.log("Quering all languages");
    const { rows } = res;
    return rows as Array<ILesson>;
  } catch (err) {
    console.log(err.stack);
  }
}

export async function InsertRow(payload: LessonPayload): Promise<ILesson> {
  const query = "INSERT INTO Lessons( name, course_id, language_code, text) VALUES ($1, $2, $3, $4) RETURNING uid, name, language_code, text;";
  try {
    const res = await pgPool.query(query,
      [payload.name, payload.course_id, payload.language_code, payload.text]);
    return res.rows[0] as ILesson;
  } catch (err) {
    console.log(err.stack);
  }
}

export async function UpdateRow(uid: string, updatePayload: LessonPayload) {
  const fields = Object.keys(updatePayload).map((key: string) => `${key}='${updatePayload[key]}'`);
  const query = `UPDATE Lessons SET ${fields.join(" , ")} WHERE uid='${uid}'`;
  try {
    const res = await pgPool.query(query);
    return res;
  } catch (err) {
    console.log(err.stack);
  }
}

export async function DeleteRow(uid: string) {
  const query = "DELETE FROM Lessons WHERE uid=$1";
  try {
    const res = await pgPool.query(query, [uid]);
  } catch (err) {
    console.log(err.stack);
  }
}

export async function DeleteTable() {
  const query = "DROP TABLE Lessons";
  try {
    const res = await pgPool.query(query);
    console.log("Dropping table");
  } catch (err) {
    console.log(err.stack);
  }
}
