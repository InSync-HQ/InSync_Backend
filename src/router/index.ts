import express from 'express';
import userRoutes from "./user/userRoutes";
import fetchNewsRoutes from './fetchNewsRoutes'
import communityRoutes from './community/communityRoutes'
import articleRoutes from './article/articleRoutes'
import commentRoutes from './comment/commentRoutes'
const router = express.Router();

router.use("/user", userRoutes);
router.use("/news/newsapi", fetchNewsRoutes);
router.use("/community", communityRoutes);
router.use("/article", articleRoutes);
router.use("/comment", commentRoutes);
export default router;