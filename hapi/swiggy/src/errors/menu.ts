import { ErrorResponse } from ".";

export const MENU_ERRROS: Record<string, ErrorResponse> = {
    SOME_ITEMS_NOT_AVAILABLE: {
        name: "SOME_ITEMS_NOT_AVAILABLE",
        errorCode: "M001",
        message: "some of the items are not avaialble! try placing a new order",
    }

}