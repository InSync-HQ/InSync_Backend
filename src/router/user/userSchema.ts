import Joi from "joi";

export default {
    register: Joi.object().keys({
        name: Joi.string().min(1),
        email: Joi.string().required().email(),
        pwd: Joi.string().min(1).required()
    }),
    login: Joi.object().keys({
        email: Joi.string().required().email(),
        pwd: Joi.string().min(1).required()
    }),
}