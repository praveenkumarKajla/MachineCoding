import { IResponse } from ".";

export const USERS_ERRROS: Record<string, IResponse> = {
  MISSING_LOGIN_DETAILS: {
    name: "MISSING_LOGIN_DETAILS",
    code: "UL001",
    message: "Missing username or password",
  },
  WRONG_LOGIN_DETAILS: {
    name: "MISSING_LOGIN_DETAILS",
    code: "UL002",
    message: "Invalid username or password",
  },
  USER_NOT_FOUND: {
    name: "USER_NOT_FOUND",
    code: "U001",
    message: "requested user not found in database",
  },
  USER_ALREADY_PRESENT: {
    name: "USER_ALREADY_PRESENT",
    code: "U002",
    message: "requested username is already taken!",
  },
  ERROR_UPLOADING_IMAGE: {
    name: "ERROR_UPLOADING_IMAGE",
    code: "UIM001",
    message: "please upload proper image!",
  },
  IMAGE_NOT_FOUND: {
    name: "IMAGE_NOT_FOUND",
    code: "UIM004",
    message: "Couldn't find the image",
  },
  INCORRECT_PASSWORD: {
    name: "INCORRECT_PASSWORD",
    code: "UP004",
    message: "Incorrect or no password",
  },
  NO_PRIVILEGE: {
    name: "NO_PRIVILEGE",
    code: "UP005",
    message: "User doesn;t have privilege to perform this action !",
  },

};

export const USER_RESPONSE: Record<string, IResponse> = {
  USER_LOGGED_IN: {
    name: "USER_LOGGED_IN",
    code: "ULR001",
    message: "user  successfully logged in",
  },
  USER_DETAILS_UPDATED: {
    name: "USER_DETAILS_UPDATED",
    code: "U003",
    message: "user details successfully updated",
  },
  USER_DELETED: {
    name: "USER_DELETED",
    code: "U004",
    message: "user successfully deleted",
  },
};
