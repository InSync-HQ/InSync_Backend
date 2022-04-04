"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChatModel = exports.chatSchema = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
const reusableModelComp_1 = require("./reusableModelComp");
exports.DOCUMENT_NAME = "chat";
exports.COLLECTION_NAME = "chats";
exports.chatSchema = new mongoose_1.Schema({
    content: { ...reusableModelComp_1.optionalStringArray },
    timestamp: { ...reusableModelComp_1.requiredTimestamp },
});
exports.ChatModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, exports.chatSchema, exports.COLLECTION_NAME);
//# sourceMappingURL=Chat.js.map