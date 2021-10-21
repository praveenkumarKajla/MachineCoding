import fs from "fs";

import {
  AuthCredentials,
  Request, ResponseObject, ResponseToolkit, Util as HapiUtil,
} from "@hapi/hapi";
import * as bcrypt from "bcrypt";

import { getResponseObject } from "@errors/index";
import * as userDao from "@dao/users";
import { IUser, UserPayload } from "@typeroot/user";
import { USERS_ERRROS, USER_RESPONSE } from "@errors/users";
import { validateFunc } from "@services/auth";
import { IUserCredentials, LoginParams, ValidationResponse } from "@typeroot/auth";
import { SERVER_CONFIG } from "@config/server_config";

export class UserController {
  login = async (request: Request, h: ResponseToolkit)
  : Promise<ResponseObject> => {
    const { username, password } = request.payload as LoginParams;
    if (!username || !password) {
      return h.response(USERS_ERRROS.MISSING_LOGIN_DETAILS).code(403);
    }
    const validationRes: ValidationResponse = await validateFunc({ username, password });
    if (validationRes.valid && validationRes.credentials) {
      request.cookieAuth.clear();
      request.cookieAuth.set({
        username: validationRes.credentials.username,
        uid: validationRes.credentials.id,
      });
      return h.redirect("/v1/");
    }
    return h.response(USERS_ERRROS.WRONG_LOGIN_DETAILS).code(403);
  }

  getUsers = async (request: Request, h: ResponseToolkit)
  : Promise<Array<IUser> | ResponseObject> => {
    try {
      const users = await userDao.QueryAllRows();
      return users;
    } catch (err) {
      return h.response(USERS_ERRROS.USER_NOT_FOUND).code(404);
    }
  }

   getUser = async (request: Request, h: ResponseToolkit)
  : Promise<IUser | ResponseObject> => {
     const { username } = <AuthCredentials & IUserCredentials>request.auth.credentials;
     try {
       const user = await userDao.QueryRow(username);
       if (user == null) {
         return h.response(USERS_ERRROS.USER_NOT_FOUND).code(404);
       }
       return user;
     } catch (err) {
       return h.response(USERS_ERRROS.USER_NOT_FOUND).code(404);
     }
   }

   addUser = async (request: Request, h: ResponseToolkit)
   : Promise<any> => {
     const userPayload = request.payload as UserPayload;

     if (userPayload.profile_picture) {
       const { imageUrl } = await this.handleFileUpload(userPayload.profile_picture);
       if (!imageUrl) {
         return h.response(USERS_ERRROS.ERROR_UPLOADING_IMAGE).code(403);
       }
       userPayload.profile_picture = imageUrl;
     }
     if (!userPayload.password || userPayload.password !== userPayload.compare_password) {
       return h.response(USERS_ERRROS.INCORRECT_PASSWORD).code(403);
     }
     const saltRounds = 10;
     userPayload.password = await bcrypt.hash(userPayload.password, saltRounds);

     try {
       const alreadyPresentUser = await userDao.QueryRow(userPayload.username);
       if (alreadyPresentUser) {
         return h.response(USERS_ERRROS.USER_ALREADY_PRESENT).code(403);
       }
       const user = await userDao.InsertRow(userPayload);
       return user;
     } catch (err) {
       return h.response(USERS_ERRROS.USER_NOT_FOUND).code(404);
     }
   }

   updateUser = async (request: Request, h: ResponseToolkit)
   : Promise<ResponseObject> => {
     const {
       username,
       uid: userUid,
     } = <AuthCredentials & IUserCredentials>request.auth.credentials;

     const updatePayload = request.payload as UserPayload;

     if (updatePayload.profile_picture) {
       const { imageUrl } = await this.handleFileUpload(updatePayload.profile_picture);
       if (!imageUrl) {
         return h.response(USERS_ERRROS.ERROR_UPLOADING_IMAGE).code(403);
       }
       updatePayload.profile_picture = imageUrl;
     }

     if (updatePayload.password) {
       const saltRounds = 10;
       updatePayload.password = await bcrypt.hash(updatePayload.password, saltRounds);
     }

     try {
       const user = await userDao.QueryRow(username);
       if (user == null || user.id !== userUid) {
         return h.response(USERS_ERRROS.USER_NOT_FOUND).code(404);
       }

       await userDao.UpdateRow(username, updatePayload);
       return h.response(USER_RESPONSE.USER_DETAILS_UPDATED).code(200);
     } catch (err) {
       return h.response(getResponseObject(err.name, err.code, err.message)).code(404);
     }
   }

   deleteUser = async (request: Request, h: ResponseToolkit)
   : Promise<ResponseObject> => {
     const { username } = <AuthCredentials & IUserCredentials>request.auth.credentials;

     try {
       await userDao.DeleteRow(username);
       request.cookieAuth.clear();
       return h.response(USER_RESPONSE.USER_DELETED).code(200);
     } catch (err) {
       return h.response(USERS_ERRROS.USER_NOT_FOUND).code(404);
     }
   }

   //  asset functions

  getImage = (request: Request, h: ResponseToolkit)
   : ResponseObject => {
    const params: HapiUtil.Dictionary<string> = request.params || {};
    const { path } = params;

    try {
      return h.file(`./${path}`);
    } catch (err) {
      return h.response(USERS_ERRROS.IMAGE_NOT_FOUND).code(404);
    }
  }

  //  helper functions

   handleFileUpload = async (file) => {
     const { filename } = file.hapi;
     if (!filename.match(/\.(jpg|jpeg|png|gif)$/)) {
       return {
         message: "Bad  File Type!",
         imageUrl: `http://${SERVER_CONFIG.HOST}:${SERVER_CONFIG.PORT}/${filename}`,
       };
     }
     // eslint-disable-next-line no-underscore-dangle
     const data = file._data as Buffer;

     const response = await fs.promises.writeFile(`./${filename}`, data);

     return {
       message: "Upload successfully!",
       imageUrl: `http://${SERVER_CONFIG.HOST}:${SERVER_CONFIG.PORT}/${SERVER_CONFIG.API_VERSION}image/${filename}`,
     };
   }
}
