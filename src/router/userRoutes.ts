import express from "express";
import { registerUser, loginUser, fetchUser } from "../controllers/userController"

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/:id", fetchUser);

export default router;