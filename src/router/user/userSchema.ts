import Joi from "joi";

let authProviders = ['local', 'facebook', 'google']

export default {
    register: Joi.object().keys({
        email: Joi.string().email().required(),
        provider: Joi.string().valid(...authProviders).required(),
        name: Joi.string().min(1),
        pwd: Joi.string().min(1),
    }),
    login: Joi.object().keys({
        email: Joi.string().email().required(),
        provider: Joi.string().valid(...authProviders).required(),
        name: Joi.string().min(1),
        pwd: Joi.string().min(1),
    }),
}