"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.loginUser = exports.registerUser = void 0;
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const registerUser = async (req, res) => {
    const emailExists = await User_1.UserModel.findOne({ email: req.body.email });
    if (emailExists)
        return res.status(400).send("Email already exists");
    const salt = await bcryptjs_1.default.genSalt(10);
    const hashedPassword = await bcryptjs_1.default.hash(req.body.pwd, salt);
    try {
        const savedUser = await User_1.UserModel.create({
            name: req.body.name,
            email: req.body.email,
            pwd: hashedPassword
        });
        res.send(savedUser);
    }
    catch (err) {
        res.status(400).send(err);
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res) => {
};
exports.loginUser = loginUser;
const fetchUser = async (req, res) => {
};
exports.fetchUser = fetchUser;
//# sourceMappingURL=userController.js.map