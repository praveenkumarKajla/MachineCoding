import pgPool from "@services/db";
import { ILanguage, LanguagePayload } from "@typeroot/language";

export async function CreateTable(): Promise<void> {
  const query = `
        CREATE TABLE IF NOT EXISTS Languages ( code varchar(2) primary key, name  varchar(30));
        INSERT INTO languages (code, name) VALUES
        ('bn', 'Bengali'),
        ('en', 'English'),
        ('hi', 'Hindi') ON CONFLICT DO NOTHING;
    `;

  try {
    await pgPool.query(query);
    console.log(" Languages Table created");
  } catch (err) {
    console.error(err);
  }
}

export async function QueryRow(code: string) : Promise<ILanguage> {
  const query = "SELECT * FROM Languages WHERE code=$1;";

  try {
    const res = await pgPool.query(query, [code]);
    const { rows } = res;
    if (rows.length === 0) return null;
    return rows[0] as ILanguage;
  } catch (err) {
    return null;
  }
}

export async function QueryAllRows(): Promise<Array<ILanguage>> {
  const query = "SELECT * FROM Languages;";
  try {
    const res = await pgPool.query(query);
    const { rows } = res;
    return rows as Array<ILanguage>;
  } catch (err) {
    return [];
  }
}

export async function InsertRow(payload: LanguagePayload): Promise<ILanguage> {
  const query = "INSERT INTO Languages(name, code) VALUES ($1, $2) RETURNING name, code;";
  try {
    const res = await pgPool.query(query,
      [payload.name, payload.code]);
    return res.rows[0] as ILanguage;
  } catch (err) {
    console.log(err.stack);
  }
}

export async function UpdateRow(code: string, updatePayload: LanguagePayload): Promise<void> {
  console.log(updatePayload);
  const fields = Object.keys(updatePayload).map((key: string) => `${key}='${updatePayload[key]}'`);
  const query = `UPDATE Languages SET ${fields.join(" , ")} WHERE code='${code}'`;
  try {
    const res = await pgPool.query(query);
    console.log(res);
  } catch (err) {
    console.log(err.stack);
  }
}

export async function DeleteRow(code: string) {
  const query = "DELETE FROM Languages WHERE code=$1";
  try {
    const res = await pgPool.query(query, [code]);
    console.log(res);
  } catch (err) {
    console.log(err.stack);
  }
}

export async function DeleteRows() {
  const query = "DELETE FROM Languages;";
  try {
    await pgPool.query(query);
  } catch (err) {
    console.log(err.stack);
  }
}

export async function DeleteTable() {
  const query = "DROP TABLE Languages";
  try {
    await pgPool.query(query);
  } catch (err) {
    console.log(err.stack);
  }
}
