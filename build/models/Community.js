"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommunityModel = exports.communitySchema = exports.COLLECTION_NAME = exports.DOCUMENT_NAME = void 0;
const mongoose_1 = require("mongoose");
const reusableModelComp_1 = require("./reusableModelComp");
exports.DOCUMENT_NAME = "community";
exports.COLLECTION_NAME = "communities";
exports.communitySchema = new mongoose_1.Schema({
    name: { ...reusableModelComp_1.requiredString },
    desc: { ...reusableModelComp_1.requiredString },
    interests: { ...reusableModelComp_1.requiredStringArray },
    mod_id: { ...reusableModelComp_1.requiredString },
    users: { ...reusableModelComp_1.requiredStringArray },
    newsfeed: { ...reusableModelComp_1.requiredStringArray }
});
exports.CommunityModel = (0, mongoose_1.model)(exports.DOCUMENT_NAME, exports.communitySchema, exports.COLLECTION_NAME);
//# sourceMappingURL=Community.js.map