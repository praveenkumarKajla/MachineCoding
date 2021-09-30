import { ErrorResponse } from ".";


export const JWT_ERRORS: Record<string, ErrorResponse> = {
    EMPTY_AUTHORIZATION: {
        name: "EMPTY_AUTHORIZATION",
        errorCode: "J0001",
        message: "Authorization Header is not present",
    },
    JWT_SIGNATURE_VERIFICATION_FAILED: {
        name: "JWT_SIGNATURE_VERIFICATION_FAILED",
        errorCode: "J0002",
        message: "authorization expired",
    }

}

