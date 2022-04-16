"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser = exports.loginUser = exports.registerUser = void 0;
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const issueJWT_1 = __importDefault(require("../helpers/issueJWT"));
const registerUser = async (req, res, next) => {
    const emailExists = await User_1.UserModel.findOne({ email: req.body.email });
    if (emailExists)
        return res.status(400).send("Email already exists.");
    let hashedPassword = undefined;
    if (req.body.pwd) {
        const salt = await bcryptjs_1.default.genSalt(10);
        hashedPassword = await bcryptjs_1.default.hash(req.body.pwd, salt);
    }
    let userData = {
        name: req.body.name,
        email: req.body.email,
        pwd: hashedPassword,
        provider: req.body.provider,
    };
    Object.keys(userData).forEach((key) => {
        if (!userData[key])
            delete userData[key];
    });
    try {
        const savedUser = await User_1.UserModel.create(userData);
        const tokenObj = (0, issueJWT_1.default)(savedUser);
        return res.send({ user: savedUser, tokens: tokenObj });
    }
    catch (err) {
        const error = new Error(`unable to create new user: ${req.body.email}`);
        error.error = err;
        next(error);
    }
};
exports.registerUser = registerUser;
const loginUser = async (req, res, next) => {
    const user = await User_1.UserModel.findOne({ email: req.body.email });
    if (!user) {
        const error = new Error(`Email ${req.body.email} does not belong to a registered user.`);
        error.status = 404;
        next(error);
    }
    if (req.body.pwd) {
        var isValid = await bcryptjs_1.default.compare(req.body.pwd, user.pwd);
        if (!isValid) {
            const error = new Error(`passwords do not match`);
            error.status = 401;
            next(error);
        }
    }
    const tokens = (0, issueJWT_1.default)(user);
    return res.json({ user, tokens });
};
exports.loginUser = loginUser;
const fetchUser = async (req, res, next) => {
    next();
};
exports.fetchUser = fetchUser;
//# sourceMappingURL=userController.js.map