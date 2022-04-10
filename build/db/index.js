"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../config");
const logger_1 = __importDefault(require("../core/logger"));
// Build the connection string
const dbURI = config_1.environment === "dev" ? config_1.db.devUrl : config_1.db.prodUrl;
const options = {
    autoIndex: false,
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
    family: 4 // Use IPv4, skip trying IPv6
};
// Create the database connection
mongoose_1.default.connect(dbURI, options).then(() => logger_1.default.info(`Mongoose connection successful: ${dbURI}`), err => logger_1.default.info(`Mongoose connection failed: ${dbURI}`));
// CONNECTION EVENTS
// When successfully connected
mongoose_1.default.connection.on("connected", () => {
    logger_1.default.info("Mongoose default connection open to " + dbURI);
});
// If the connection throws an error
mongoose_1.default.connection.on("error", (err) => {
    logger_1.default.error("Mongoose default connection error: " + err);
});
// When the connection is disconnected
mongoose_1.default.connection.on("disconnected", () => {
    logger_1.default.info("Mongoose default connection disconnected");
});
// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
    mongoose_1.default.connection.close(() => {
        logger_1.default.info("Mongoose default connection disconnected through app termination");
        process.exit(0);
    });
});
//# sourceMappingURL=index.js.map