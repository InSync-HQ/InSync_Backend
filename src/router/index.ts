import express from 'express';
import userRoutes from "./userRoutes";
import fetchNewsRoutes from './fetchNewsRoutes'
const router = express.Router();

router.use("/user/", userRoutes);
router.use("/news/", fetchNewsRoutes)
export default router;