import express from 'express'
import { createArticle, fetchAllArticles, updateArticle } from '../../controllers/articleController';
import validator from '../../helpers/validator';
import articleSchema from './articleSchema';

const router = express.Router();

router.get("/fetchAll", fetchAllArticles);
router.post("/new", validator(articleSchema.new), createArticle);
router.patch("/update/:id", updateArticle);
export default router;