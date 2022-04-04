"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.environment = exports.db = void 0;
exports.db = {
    devUrl: process.env.DB_DEV_URL || "",
    prodUrl: process.env.DB_PROD_URL || "",
};
exports.environment = process.env.NODE_ENV || "";
exports.port = process.env.PORT || 3000;
//# sourceMappingURL=config.js.map