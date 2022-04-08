import express from 'express';
import { newsApiKey } from '../config';
import logger from '../core/logger';
import axios from "axios"
const router = express.Router();

router.get("/general", async (req, res) => {
    try {
        logger.info(`The api key is ${newsApiKey}`)
        let news = await axios.get(`https://newsapi.org/v2/top-headlines?apiKey=${newsApiKey}&category=general&language=en`)
        return res.status(200).send(news.data);
    } catch (err) {
        logger.error(err)
        return res.status(500).json({ "err": "Invalid/Expired API News Api" })
    }
})

export default router;
