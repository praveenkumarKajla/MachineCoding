import { IResponse } from ".";

export const LESSONS_ERRROS: Record<string, IResponse> = {
  LESSON_CODE_LENGTH: {
    name: "LESSON_CODE_LENGTH",
    code: "LE001",
    message: "wrong iso639-1 lesson code!",
  },
  LESSON_NOT_FOUND: {
    name: "LESSON_NOT_FOUND",
    code: "LE002",
    message: "requested lesson not found in database",
  },
  LESSON_ALREADY_PRESENT: {
    name: "LESSON_ALREADY_PRESENT",
    code: "LE003",
    message: "requested lessonname is already present!",
  },
  NO_COURSE_DEFINED: {
    name: "NO_COURSE_DEFINED",
    code: "LEC001",
    message: "No course id is provided!",
  },

};

export const LESSONS_RESPONSE: Record<string, IResponse> = {
  LESSON_ADDED: {
    name: "LESSON_ADDED",
    code: "LR001",
    message: "lesson successfully added",
  },
  LESSON_DETAILS_UPDATED: {
    name: "LESSON_DETAILS_UPDATED",
    code: "LR002",
    message: "lesson details successfully updated",
  },
  LESSON_DELETED: {
    name: "LESSON_DELETED",
    code: "LR003",
    message: "lesson successfully deleted",
  },
};
