"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const config_1 = require("./config");
const requestlogger_1 = __importDefault(require("./core/requestlogger"));
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = __importDefault(require("./core/logger"));
const passport_1 = __importDefault(require("passport"));
require("./db");
const passport_2 = __importDefault(require("./helpers/passport"));
(0, passport_2.default)(passport_1.default);
const app = (0, express_1.default)();
process.on("uncaughtException", (e) => {
    logger_1.default.error(e);
});
app.use(express_1.default.json({ limit: "10mb" }));
app.use(express_1.default.urlencoded({
    limit: "10mb",
    extended: true,
    parameterLimit: 50000,
}));
app.use((0, cors_1.default)({ origin: "*", optionsSuccessStatus: 200 }));
app.use((0, morgan_1.default)("tiny", { stream: requestlogger_1.default }));
app.use(passport_1.default.initialize());
app.get("/", (req, res) => {
    return res.send("Welcome to the Insync Backend v1.0.0");
});
app.use("/", router_1.default);
// catch 404 and forward to error handler
app.use((req, res, next) => next(new Error(`No Such route Found: ${res.req.originalUrl}`)));
app.use((err, req, res, next) => {
    logger_1.default.error(err);
    return res.status(500).json({ success: false, msg: err.message });
});
app.listen(config_1.port, () => {
    console.log(`Server started at port:${config_1.port}`);
});
//# sourceMappingURL=app.js.map