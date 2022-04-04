"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberField = exports.requiredTimestamp = exports.requiredStringArray = exports.optionalStringArray = exports.optionalString = exports.requiredString = void 0;
const mongoose_1 = require("mongoose");
exports.requiredString = {
    type: mongoose_1.Schema.Types.String,
    required: true,
    trim: true,
};
exports.optionalString = {
    type: mongoose_1.Schema.Types.String,
    trim: true,
};
exports.optionalStringArray = {
    type: mongoose_1.Schema.Types.String,
    trim: true,
};
exports.requiredStringArray = {
    type: mongoose_1.Schema.Types.String,
    required: true,
    trim: true,
};
exports.requiredTimestamp = {
    type: mongoose_1.Schema.Types.Date,
    required: true,
    trim: true,
    default: Date.now
};
exports.numberField = {
    type: mongoose_1.Schema.Types.Number,
    default: 0,
};
//# sourceMappingURL=reusableModelComp.js.map