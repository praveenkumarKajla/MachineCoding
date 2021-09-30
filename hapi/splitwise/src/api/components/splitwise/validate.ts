import { SPLIT_TYPE } from "@typeroot/models";
import Joi, { string } from "joi";

export default {
    get: {
        expenses: {
            params: Joi.object().keys({
                // check if uuid_v4
                groupId: Joi.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i).required().error(new Error("Invalid Group Id!")),
            }),
        }
    },

    post: {
        groups: {
            payload: Joi.object().keys({
                admin: Joi.string().min(1).max(140).required(),
                name: Joi.string().min(1).max(140).required(),
                members: Joi.array().items(Joi.object({
                    first_name: Joi.string().min(1).max(140).required(),
                    last_name: Joi.string().min(1).max(140),
                    email: Joi.string().email().required(),
                }))
            }),
        },
        expense: {
            payload: Joi.object().keys({
                created_by: Joi.string().length(8).required(),
                amount: Joi.number().positive().required(),
                title: Joi.string().min(1).max(140).required(),
                notes: Joi.string(),
                splitType: Joi.string().valid(SPLIT_TYPE.EQUAL, SPLIT_TYPE.UNEQUAL, SPLIT_TYPE.PERCENTAGE).required(),
                date: Joi.string().required(),
                shares: Joi.array().items(Joi.object({
                    userID: Joi.string().length(8).required(),
                    paid: Joi.number().min(0).required(),
                    owed: Joi.number().positive().required()
                }))
            }),
            params: Joi.object().keys({
                // check if uuid_v4
                groupId: Joi.string().regex(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i).required().error(new Error("Invalid Group Id!")),
            }),
        }

    }
}