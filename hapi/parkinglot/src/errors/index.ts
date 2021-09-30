export type ErrorResponse = {
    name: string;
    errorCode: string;
    message: string;
};
export class ERROR extends Error {
    readonly errorName: string;

    readonly errorCode: string;

    constructor(errorResponse: ErrorResponse) {
        super(errorResponse.message);
        this.errorName = errorResponse.name;
        this.errorCode = errorResponse.errorCode;
    }
}