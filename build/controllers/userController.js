"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.loginUser = exports.registerUser = void 0;
const User_1 = require("./../models/User");
const validation_1 = require("./validation");
const registerUser = async (req, res) => {
    const { error } = await (0, validation_1.Registervalidation)(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const user = new User_1.UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
    const { error } = await (0, validation_1.LoginValidation)(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const user = new User_1.UserModel({
        email: req.body.email,
        password: req.body.password
    });
};
exports.loginUser = loginUser;
const fetchUser = async (req, res) => {
};
exports.fetchUser = fetchUser;
//# sourceMappingURL=userController.js.map