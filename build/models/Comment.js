"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModel = exports.commentSchema = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
const reusableModelComp_1 = require("./reusableModelComp");
exports.DOCUMENT_NAME = "comment";
exports.COLLECTION_NAME = "comments";
exports.commentSchema = new mongoose_1.Schema({
    content: { ...reusableModelComp_1.requiredString },
    upvotes: { ...reusableModelComp_1.numberField },
    downvotes: { ...reusableModelComp_1.numberField }
});
exports.CommentModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, exports.commentSchema, exports.COLLECTION_NAME);
//# sourceMappingURL=Comment.js.map