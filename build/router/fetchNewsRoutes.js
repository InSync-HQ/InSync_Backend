"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("../config");
const logger_1 = __importDefault(require("../core/logger"));
const axios_1 = __importDefault(require("axios"));
const router = express_1.default.Router();
router.get("/general", async (req, res) => {
    try {
        logger_1.default.info(`The api key is ${config_1.newsApiKey}`);
        let news = await axios_1.default.get(`https://newsapi.org/v2/top-headlines?apiKey=${config_1.newsApiKey}&category=general&language=en`);
        return res.status(200).send(news.data);
    }
    catch (err) {
        logger_1.default.error(err);
        return res.status(500).json({ "err": "Invalid/Expired API News Api" });
    }
});
exports.default = router;
//# sourceMappingURL=fetchNewsRoutes.js.map