import { IResponse } from ".";

export const COURSES_ERRROS: Record<string, IResponse> = {
  COURSE_CODE_LENGTH: {
    name: "COURSE_CODE_LENGTH",
    code: "CE001",
    message: "wrong iso639-1 COURSE code!",
  },
  COURSE_NOT_FOUND: {
    name: "COURSE_NOT_FOUND",
    code: "CE002",
    message: "requested COURSE not found in database",
  },
  COURSE_ALREADY_PRESENT: {
    name: "COURSE_ALREADY_PRESENT",
    code: "CE003",
    message: "requested COURSEname is already present!",
  },
  WRONG_COURSE_OWNER: {
    name: "WRONG_COURSE_OWNER",
    code: "CE004",
    message: "you can't update this course!",
  },

};

export const COURSES_RESPONSE: Record<string, IResponse> = {
  COURSE_ADDED: {
    name: "COURSE_ADDED",
    code: "CR001",
    message: "COURSE successfully added",
  },
  COURSE_DETAILS_UPDATED: {
    name: "COURSE_DETAILS_UPDATED",
    code: "CR002",
    message: "COURSE details successfully updated",
  },
  COURSE_DELETED: {
    name: "COURSE_DELETED",
    code: "CR003",
    message: "COURSE successfully deleted",
  },
};
