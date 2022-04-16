"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtSecret = exports.newsApiKey = exports.port = exports.environment = exports.db = void 0;
exports.db = {
    devUrl: process.env.DB_DEV_URL || "",
    prodUrl: process.env.DB_PROD_URL || "",
};
exports.environment = process.env.NODE_ENV || "";
exports.port = process.env.PORT || 3000;
exports.newsApiKey = process.env.NEWS_API_KEY || "";
exports.jwtSecret = process.env.JWT_SECRET || "testsecret";
//# sourceMappingURL=config.js.map