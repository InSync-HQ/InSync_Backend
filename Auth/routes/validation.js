//validation
const Joi = require("@hapi/joi");

//Register validation
const Registervalidation = (data) => {
    const schema = {
        name: Joi.string().min(6).required(),
        email: Joi.string().min(6).required().email(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
}

//Login validation
const LoginValidation = (data) => {
    const schema = {
        name: Joi.string().min(6).required(),
        password: Joi.string().min(6).required()
    };
    return Joi.validate(data, schema);
}

module.exports.Registervalidation = Registervalidation;
module.exports.LoginValidation = LoginValidation;