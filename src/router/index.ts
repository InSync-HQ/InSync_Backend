import express from 'express';
import userRoutes from "./user/userRoutes";
import fetchNewsRoutes from './fetchNewsRoutes'
const router = express.Router();

router.use("/user/", userRoutes);
router.use("/news/newsapi", fetchNewsRoutes)
export default router;