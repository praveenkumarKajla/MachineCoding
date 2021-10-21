import {
  Request, ResponseObject, ResponseToolkit, Util as HapiUtil,
} from "@hapi/hapi";
import * as bcrypt from "bcrypt";

import * as languageDao from "@dao/languages";
import { ILanguage, LanguagePayload } from "@typeroot/language";
import { USERS_ERRROS, USER_RESPONSE } from "@errors/users";
import { LANGUAGES_ERRROS, LANGUAGES_RESPONSE } from "@errors/languages";

export class LanguageController {
  getLanguages = async (request: Request, h: ResponseToolkit)
  : Promise<Array<ILanguage> | ResponseObject> => {
    try {
      const languages = await languageDao.QueryAllRows();
      return languages;
    } catch (err) {
      return h.response(USERS_ERRROS.USER_NOT_FOUND).code(404);
    }
  }

   getLanguage = async (request: Request, h: ResponseToolkit)
  : Promise<ILanguage | ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};
     const { code } = params;

     try {
       const language = await languageDao.QueryRow(code);
       if (language == null) {
         return h.response(LANGUAGES_ERRROS.LANGUAGE_NOT_FOUND).code(404);
       }
       return language;
     } catch (err) {
       return h.response(LANGUAGES_ERRROS.LANGUAGE_NOT_FOUND).code(404);
     }
   }

   addLanguage = async (request: Request, h: ResponseToolkit)
   : Promise<ILanguage| ResponseObject> => {
     const languagePayload = request.payload as LanguagePayload;
     if (languagePayload.code.length !== 2) {
       return h.response(LANGUAGES_ERRROS.LANGUAGE_CODE_LENGTH).code(400);
     }

     try {
       const alreadyPresentLanguage = await languageDao.QueryRow(languagePayload.code);
       if (alreadyPresentLanguage) {
         return h.response(LANGUAGES_ERRROS.LANGUAGE_ALREADY_PRESENT).code(403);
       }
       const language = await languageDao.InsertRow(languagePayload);
       return language;
     } catch (err) {
       return h.response(LANGUAGES_ERRROS.LANGUAGE_NOT_FOUND).code(404);
     }
   }

   updateLanguage = async (request: Request, h: ResponseToolkit)
   : Promise<ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};
     const { code } = params;
     const updatePayload = request.payload as LanguagePayload;

     if (code.length !== 2
        || (updatePayload.code && updatePayload.code.length !== 2)) {
       return h.response(LANGUAGES_ERRROS.LANGUAGE_CODE_LENGTH).code(400);
     }

     try {
       const language = await languageDao.QueryRow(code);
       if (language === null) {
         return h.response(LANGUAGES_ERRROS.LANGUAGE_NOT_FOUND).code(404);
       }
       await languageDao.UpdateRow(code, updatePayload);
       return h.response(LANGUAGES_RESPONSE.LANGUAGE_DETAILS_UPDATED).code(200);
     } catch (err) {
       return h.response(LANGUAGES_ERRROS.LANGUAGE_NOT_FOUND).code(404);
     }
   }

   deleteLanguage = async (request: Request, h: ResponseToolkit)
   : Promise<ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};
     const { code } = params;

     if (code.length !== 2) {
       return h.response(LANGUAGES_ERRROS.LANGUAGE_CODE_LENGTH).code(400);
     }
     try {
       await languageDao.DeleteRow(code);
       return h.response(LANGUAGES_RESPONSE.LANGUAGE_DELETED).code(200);
     } catch (err) {
       return h.response(USERS_ERRROS.LANGUAGE_NOT_FOUND).code(404);
     }
   }

   deleteLanguages = async (request: Request, h: ResponseToolkit)
   : Promise<ResponseObject> => {
     const params: HapiUtil.Dictionary<string> = request.params || {};

     try {
       await languageDao.DeleteRows();
       return h.response(LANGUAGES_RESPONSE.LANGUAGE_DELETED).code(200);
     } catch (err) {
       return h.response(USERS_ERRROS.LANGUAGE_NOT_FOUND).code(404);
     }
   }
}
