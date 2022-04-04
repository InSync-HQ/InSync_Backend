"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.userSchema = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
const reusableModelComp_1 = require("./reusableModelComp");
exports.DOCUMENT_NAME = "user";
exports.COLLECTION_NAME = "users";
exports.userSchema = new mongoose_1.Schema({
    email: { ...reusableModelComp_1.requiredString },
    pwd: { ...reusableModelComp_1.requiredString },
    communities: { ...reusableModelComp_1.requiredStringArray },
    saved_articles: { ...reusableModelComp_1.optionalStringArray },
    interests: { ...reusableModelComp_1.requiredStringArray }
});
exports.UserModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, exports.userSchema, exports.COLLECTION_NAME);
//# sourceMappingURL=User.js.map