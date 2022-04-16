"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
let authProviders = ['local', 'facebook', 'google'];
exports.default = {
    register: joi_1.default.object().keys({
        email: joi_1.default.string().email().required(),
        provider: joi_1.default.string().valid(...authProviders).required(),
        name: joi_1.default.string().min(1),
        pwd: joi_1.default.string().min(1),
    }),
    login: joi_1.default.object().keys({
        email: joi_1.default.string().email().required(),
        provider: joi_1.default.string().valid(...authProviders).required(),
        name: joi_1.default.string().min(1),
        pwd: joi_1.default.string().min(1),
    }),
};
//# sourceMappingURL=userSchema.js.map