import Joi from "joi";

export default {
    "new": Joi.object().keys({
        name: Joi.string().required(),
        mod_id: Joi.string().required(),
        desc: Joi.string(),
        interests: Joi.array().items(Joi.string()),
        users: Joi.array().items(Joi.string()),
        newsfeed: Joi.array().items(Joi.string()),
    })
}