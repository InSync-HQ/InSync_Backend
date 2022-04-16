"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config");
exports.default = (user) => {
    const _id = user._id;
    const expiresIn = '300d';
    const payload = {
        sub: _id,
        iat: Date.now()
    };
    const signedToken = jsonwebtoken_1.default.sign(payload, config_1.jwtSecret, { expiresIn: expiresIn });
    return {
        token: "Bearer " + signedToken,
        expires: expiresIn
    };
};
//# sourceMappingURL=issueJWT.js.map