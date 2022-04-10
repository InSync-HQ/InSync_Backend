"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const joi_1 = __importDefault(require("joi"));
exports.default = {
    register: joi_1.default.object().keys({
        name: joi_1.default.string().min(1),
        email: joi_1.default.string().required().email(),
        pwd: joi_1.default.string().min(1).required()
    }),
    login: joi_1.default.object().keys({
        email: joi_1.default.string().required().email(),
        pwd: joi_1.default.string().min(1).required()
    }),
};
//# sourceMappingURL=userSchema.js.map