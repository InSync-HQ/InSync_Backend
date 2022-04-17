import express from 'express';
import userRoutes from "./user/userRoutes";
import fetchNewsRoutes from './fetchNewsRoutes'
import communityRoutes from './community/communityRoutes'


const router = express.Router();

router.use("/user", userRoutes);
router.use("/news/newsapi", fetchNewsRoutes)
router.use("/community", communityRoutes)
export default router;