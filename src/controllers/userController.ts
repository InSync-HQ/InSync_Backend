import { NextFunction, Request, Response } from "express";
import { UserModel } from "../models/User";
import bcrypt from "bcryptjs";
import issueJWT from "../helpers/issueJWT";
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {

    const emailExists = await UserModel.findOne({ email: req.body.email });
    if (emailExists)
        return res.status(400).send("Email already exists.");

    let hashedPassword = undefined;
    if (req.body.pwd) {
        const salt = await bcrypt.genSalt(10);
        hashedPassword = await bcrypt.hash(req.body.pwd, salt);
    }

    let userData: any = {
        name: req.body.name,
        email: req.body.email,
        pwd: hashedPassword,
        provider: req.body.provider,
    }

    Object.keys(userData).forEach((key: any) => {
        if (!userData[key]) delete userData[key]
    })

    try {
        const savedUser = await UserModel.create(userData);
        const tokenObj = issueJWT(savedUser);
        return res.send({ user: savedUser, tokens: tokenObj });
    }
    catch (err) {
        const error: IError = new Error(`unable to create new user: ${req.body.email}`);
        error.error = err;
        next(error);
    }
}
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) {
        const error: IError = new Error(`Email ${req.body.email} does not belong to a registered user.`);
        error.status = 404;
        next(error);
    }
    if (req.body.pwd) {
        var isValid = await bcrypt.compare(req.body.pwd, user.pwd);
        if (!isValid) {
            const error: IError = new Error(`passwords do not match`)
            error.status = 401;
            next(error);
        }
    }
    const tokens = issueJWT(user);
    return res.json({ user, tokens });
}
export const fetchUser = async (req: Request, res: Response, next: NextFunction) => {
    next();
}