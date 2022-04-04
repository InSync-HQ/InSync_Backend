"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleModel = exports.articleSchema = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
const reusableModelComp_1 = require("./reusableModelComp");
exports.DOCUMENT_NAME = "article";
exports.COLLECTION_NAME = "articles";
exports.articleSchema = new mongoose_1.Schema({
    source_url: { ...reusableModelComp_1.requiredString },
    media_url: { ...reusableModelComp_1.requiredString },
    desc: { ...reusableModelComp_1.optionalString },
    upvotes: { ...reusableModelComp_1.numberField },
    downvotes: { ...reusableModelComp_1.numberField },
    comments: { ...reusableModelComp_1.optionalStringArray },
});
exports.ArticleModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, exports.articleSchema, exports.COLLECTION_NAME);
//# sourceMappingURL=Article.js.map