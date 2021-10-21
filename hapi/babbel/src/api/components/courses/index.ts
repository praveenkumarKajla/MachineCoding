import {
  AuthCredentials,
  Request, ResponseObject, ResponseToolkit, Util as HapiUtil,
} from "@hapi/hapi";

import { ICourse, CoursePayload } from "@typeroot/course";
import * as courseDao from "@dao/courses";
import {
  COURSES_ERRROS, COURSES_RESPONSE,
} from "@errors/courses";
import { IUserCredentials } from "@typeroot/auth";

export class CourseController {
  getCourses = async (request: Request, h: ResponseToolkit)
  : Promise<Array<ICourse> | ResponseObject> => {
    const queryParams: HapiUtil.Dictionary<string> = request.query || {};
    const { userUid } = queryParams;
    try {
      let courses: Array<ICourse> = [];
      if (userUid) {
        courses = await courseDao.QueryAllRows(userUid);
      } else {
        courses = await courseDao.QueryAllRows();
      }
      return courses;
    } catch (err) {
      return h.response(COURSES_ERRROS.COURSE_NOT_FOUND).code(404);
    }
  }

   getCourse = async (request: Request, h: ResponseToolkit)
  : Promise<ICourse | ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};
     const { uid } = params;

     try {
       const course = await courseDao.QueryRow(uid);
       if (course == null) {
         return h.response(COURSES_ERRROS.COURSE_NOT_FOUND).code(404);
       }
       return course;
     } catch (err) {
       return h.response(COURSES_ERRROS.COURSE_NOT_FOUND).code(404);
     }
   }

   addCourse = async (request: Request, h: ResponseToolkit)
   : Promise<any> => {
     const { uid } = <AuthCredentials & IUserCredentials>request.auth.credentials;
     const coursePayload = request.payload as CoursePayload;
     coursePayload.owner_id = uid;
     try {
       const course = await courseDao.InsertRow(coursePayload);
       return course;
     } catch (err) {
       return h.response(COURSES_ERRROS.LESSON_NOT_FOUND).code(404);
     }
   }

   updateCourse = async (request: Request, h: ResponseToolkit)
   : Promise<ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};
     const { uid } = params;
     const { uid: userUid } = <AuthCredentials & IUserCredentials>request.auth.credentials;
     const updatePayload = request.payload as CoursePayload;

     try {
       const course = await courseDao.QueryRow(uid);
       if (course == null) {
         return h.response(COURSES_ERRROS.COURSE_NOT_FOUND).code(404);
       }
       if (course.owner.id !== userUid) {
         return h.response(COURSES_ERRROS.WRONG_COURSE_OWNER).code(403);
       }
       await courseDao.UpdateRow(uid, updatePayload);
       return h.response(COURSES_RESPONSE.COURSE_DETAILS_UPDATED).code(200);
     } catch (err) {
       return h.response(COURSES_ERRROS.COURSE_NOT_FOUND).code(404);
     }
   }

   deleteCourse = async (request: Request, h: ResponseToolkit)
   : Promise<ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};
     const { uid } = params;
     const { uid: userUid } = <AuthCredentials & IUserCredentials>request.auth.credentials;

     try {
       const course = await courseDao.QueryRow(uid);
       if (course == null) {
         return h.response(COURSES_ERRROS.COURSE_NOT_FOUND).code(404);
       }
       if (course.owner.id !== userUid) {
         return h.response(COURSES_ERRROS.WRONG_COURSE_OWNER).code(403);
       }
       await courseDao.DeleteRow(uid);
       return h.response(COURSES_RESPONSE.COURSE_DELETED).code(200);
     } catch (err) {
       return h.response(COURSES_ERRROS.COURSE_NOT_FOUND).code(404);
     }
   }
}
