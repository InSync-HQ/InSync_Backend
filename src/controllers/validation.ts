//validation
const Joi = require("@hapi/joi");

//Register validation
export const Registervalidation = async (data: any): Promise<any> => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
}

//Login validation
export const LoginValidation = async (data: any): Promise<any> => {
    const schema = {
        name: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
}