import {
  AuthCredentials,
  Request, ResponseObject, ResponseToolkit, Util as HapiUtil,
} from "@hapi/hapi";

import { ILesson, LessonPayload } from "@typeroot/lesson";
import * as lessonDao from "@dao/lessons";
import * as courseDao from "@dao/courses";
import * as languageDao from "@dao/languages";
import { LESSONS_ERRROS, LESSONS_RESPONSE } from "@errors/lessons";
import { LANGUAGES_ERRROS } from "@errors/languages";
import { CoursePayload, ICourse } from "@typeroot/course";
import { IUserCredentials } from "@typeroot/auth";
import { USERS_ERRROS } from "@errors/users";
import { COURSES_ERRROS } from "@errors/courses";

export class LessonController {
  getLessons = async (request: Request, h: ResponseToolkit)
  : Promise<Array<ILesson> | ResponseObject> => {
    try {
      const lessons = await lessonDao.QueryAllRows();
      return lessons;
    } catch (err) {
      return h.response(LESSONS_ERRROS.LESSON_NOT_FOUND).code(404);
    }
  }

   getLesson = async (request: Request, h: ResponseToolkit)
  : Promise<ILesson | ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};
     const { uid } = params;

     try {
       const lesson = await lessonDao.QueryRow(uid);
       if (lesson == null) {
         return h.response(LESSONS_ERRROS.LESSON_NOT_FOUND).code(404);
       }
       return lesson;
     } catch (err) {
       return h.response(LESSONS_ERRROS.LESSON_NOT_FOUND).code(404);
     }
   }

   addLesson = async (request: Request, h: ResponseToolkit)
   : Promise<any> => {
     const lessonPayload = request.payload as LessonPayload;

     if (lessonPayload.course_id === null) {
       return h.response(LESSONS_ERRROS.LESSON_NOT_FOUND).code(404);
     }

     try {
       const language = await languageDao.QueryRow(lessonPayload.language_code);
       if (language === null) {
         return h.response(LESSONS_ERRROS.LESSON_NOT_FOUND).code(404);
       }
       const course = await courseDao.QueryRow(lessonPayload.course_id);
       if (course == null || course === undefined) {
         return h.response(COURSES_ERRROS.COURSE_NOT_FOUND).code(404);
       }
       const lesson = await lessonDao.InsertRow(lessonPayload);
       return lesson;
     } catch (err) {
       return h.response(LESSONS_ERRROS.LESSON_NOT_FOUND).code(404);
     }
   }

   updateLesson = async (request: Request, h: ResponseToolkit)
   : Promise<ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};
     const { uid: lessonUid } = params;
     const { uid: userUid } = <AuthCredentials & IUserCredentials>request.auth.credentials;
     const updatePayload = request.payload as LessonPayload;

     try {
       const lesson: any = await lessonDao.QueryRow(lessonUid);
       if (lesson == null) {
         return h.response(LESSONS_ERRROS.LESSON_NOT_FOUND).code(404);
       }
       if (updatePayload.language_code) {
         const language = await languageDao.QueryRow(updatePayload.language_code);
         if (language === null) {
           return h.response(LANGUAGES_ERRROS.LANGUAGE_NOT_FOUND).code(404);
         }
       }
       if (lesson.course.owner_id !== userUid) {
         return h.response(USERS_ERRROS.NO_PRIVILEGE).code(403);
       }
       await lessonDao.UpdateRow(lessonUid, updatePayload);
       return h.response(LESSONS_RESPONSE.LESSON_DETAILS_UPDATED).code(200);
     } catch (err) {
       return h.response(LESSONS_ERRROS.LESSON_NOT_FOUND).code(404);
     }
   }

   deleteLesson = async (request: Request, h: ResponseToolkit)
   : Promise<ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};
     const { uid } = params;

     try {
       await lessonDao.DeleteRow(uid);
       return h.response(LESSONS_RESPONSE.LESSON_DELETED).code(200);
     } catch (err) {
       return h.response(LESSONS_ERRROS.LESSON_NOT_FOUND).code(404);
     }
   }
}
