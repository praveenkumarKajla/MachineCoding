import { ErrorResponse } from ".";

export const CAB_ERRORS: Record<string, ErrorResponse> = {
    NO_CABS_FOUND: {
        name: "NO_CABS_FOUND",
        errorCode: "C001",
        message: "no cabs found in the area! try agian",
    }

}