import { IResponse } from ".";

export const LANGUAGES_ERRROS: Record<string, IResponse> = {
  LANGUAGE_CODE_LENGTH: {
    name: "LANGUAGE_CODE_LENGTH",
    code: "LE001",
    message: "wrong iso639-1 language code!",
  },
  LANGUAGE_NOT_FOUND: {
    name: "LANGUAGE_NOT_FOUND",
    code: "LE002",
    message: "requested language not found in database",
  },
  LANGUAGE_ALREADY_PRESENT: {
    name: "LANGUAGE_ALREADY_PRESENT",
    code: "LE003",
    message: "requested languagename is already present!",
  },

};

export const LANGUAGES_RESPONSE: Record<string, IResponse> = {
  LANGUAGE_ADDED: {
    name: "LANGUAGE_ADDED",
    code: "LR001",
    message: "language successfully added",
  },
  LANGUAGE_DETAILS_UPDATED: {
    name: "LANGUAGE_DETAILS_UPDATED",
    code: "LR002",
    message: "language details successfully updated",
  },
  LANGUAGE_DELETED: {
    name: "LANGUAGE_DELETED",
    code: "LR003",
    message: "language successfully deleted",
  },
};
