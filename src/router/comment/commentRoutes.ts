import express from 'express';
import { createComment, fetchCommentsForArticle, updateComment } from '../../controllers/commentController';
import passport from "passport";
import validator from '../../helpers/validator';
import commentSchema from './commentSchema';

const router = express.Router();

router.use("/", passport.authenticate("jwt", { session: false }))

router.post("/new", validator(commentSchema.new), createComment);
router.get("/forArticle", fetchCommentsForArticle);
router.patch("/update/:id", validator(commentSchema.update), updateComment);

export default router;