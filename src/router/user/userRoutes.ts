import express from "express";
import { registerUser, loginUser, fetchUser } from "../../controllers/userController"
import validator from "../../helpers/validator";
import userSchema from "./userSchema";

const router = express.Router();

router.post("/register", validator(userSchema.register), registerUser);
router.post("/login", validator(userSchema.login), loginUser);
router.get("/:id", fetchUser);

export default router;