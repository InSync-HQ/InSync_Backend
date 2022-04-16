import express from "express";
import { registerUser, loginUser, fetchUser } from "../../controllers/userController"
import validator from "../../helpers/validator";
import userSchema from "./userSchema";
import passport from "passport";


const router = express.Router();

router.post("/register", validator(userSchema.register), registerUser);
router.post("/login", validator(userSchema.login), loginUser);
router.get('/protected', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    try {
        return res.status(200).json({ success: true, msg: "You are successfully authenticated to this route!" });
    } catch (err) {
        const error: IError = new Error("jwt invlid/expired");
        error.error = err;
        next(error);
    }
});
router.get("/:id", fetchUser);

export default router;