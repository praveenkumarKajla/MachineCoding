import * as userDao from "@dao/users";
import * as languageDao from "@dao/languages";
import * as lessonDao from "@dao/lessons";
import * as courseDao from "@dao/courses";

export async function ensureTablesExist() {
  await userDao.CreateTable();
  await languageDao.CreateTable();
  await courseDao.CreateTable();
  await lessonDao.CreateTable();
}
