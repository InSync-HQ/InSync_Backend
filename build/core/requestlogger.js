"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("./logger"));
class MyStream {
    write(text) {
        logger_1.default.info(text.replace(/\n$/, ""));
    }
}
exports.default = new MyStream();
//# sourceMappingURL=requestlogger.js.map