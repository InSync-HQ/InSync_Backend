import express from "express";
import { registerUser, loginUser, fetchUser, updateUser } from "../../controllers/userController"
import validator from "../../helpers/validator";
import userSchema from "./userSchema";
import passport from "passport";
import { IError } from "../../types/types";


const router = express.Router();

router.post("/register", validator(userSchema.register), registerUser);
router.post("/login", validator(userSchema.login), loginUser);

router.use("/", passport.authenticate('jwt', { session: false }));
router.get("/me", fetchUser);
router.get('/protected', (req, res, next) => {
    try {
        return res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!" });
    } catch (err) {
        const error: IError = new Error("jwt invlid/expired");
        error.error = err;
        next(error);
    }
});
router.patch("/update", validator(userSchema.update), updateUser);
export default router;