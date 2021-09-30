import { ErrorResponse } from ".";

export const RIDE_ERRORS: Record<string, ErrorResponse> = {
    UNKNOWN_RIDE: {
        name: "UNKNOWN_RIDE",
        errorCode: "C001",
        message: "no ride found !",
    }

}