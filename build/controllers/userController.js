"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.loginUser = exports.registerUser = void 0;
const User_1 = require("./../models/User");
const validation_1 = require("./validation");
const bcrypt = __importStar(require("bcrypt"));
const registerUser = async (req, res) => {
    const { error } = await (0, validation_1.Registervalidation)(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const emailExists = await User_1.UserModel.findOne({ email: req.body.email });
    if (emailExists)
        return res.status(400).send("Email already exists");
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.pwd, salt);
    const user = new User_1.UserModel({
        name: req.body.name,
        email: req.body.email,
        pwd: hashedPassword
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
};
exports.loginUser = loginUser;
const fetchUser = async (req, res) => {
    const user = await User_1.UserModel.findOne({ email: req.body.email });
    if (!user)
        return res.status(404).send("Email or Password is wrong");
    const validpwd = await bcrypt.compare(req.body.pwd, user.pwd);
};
exports.fetchUser = fetchUser;
//# sourceMappingURL=userController.js.map