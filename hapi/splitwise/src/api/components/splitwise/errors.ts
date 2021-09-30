export type ErrorResponse = {
  name: string;
  errorCode: string;
  message: string;
};

export const PROFILE_ERRORS = {
  MAX_10_EMAILS: {
    name: "MAX_10_EMAILS",
    errorCode: "U001",
    message: "maximum 10 emails allowed",
  },

}

export const GROUP_ERRORS = {
  WRONG_GROUPID: {
    name: "WRONG_GROUPID",
    errorCode: "G001",
    message: "wrong group id specified",
  },

}
export class ERROR extends Error {
  readonly errorName: string;

  readonly errorCode: string;

  constructor(errorResponse: ErrorResponse) {
    super(errorResponse.message);
    this.errorName = errorResponse.name;
    this.errorCode = errorResponse.errorCode;
  }
}