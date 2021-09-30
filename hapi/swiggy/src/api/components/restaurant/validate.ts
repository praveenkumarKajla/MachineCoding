
import Joi, { string } from "joi";

export default {
    get: {
        restaurants: {
            query: Joi.object().keys({
                lat:  Joi.number(),
                lng: Joi.number()
            }),
        }
    }

}