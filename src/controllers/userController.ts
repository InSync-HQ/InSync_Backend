import { NextFunction, Request, Response } from "express";
import bcrypt from "bcryptjs";
import issueJWT from "../helpers/issueJWT";
import UserRepo from "../db/repositories/UserRepo";
import { IError, ProtectedReq } from "../types/types";
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {

    const emailExists = await UserRepo.findByEmail(req.body.email);
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
        const savedUser = await UserRepo.create(userData);
        const tokenObj = issueJWT(savedUser);
        return res.json({ user: savedUser, tokens: tokenObj });
    }
    catch (err) {
        const error: IError = new Error(`unable to create new user: ${req.body.email}`);
        error.error = err;
        next(error);
    }
}
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserRepo.findByEmail(req.body.email);
    if (!user) {
        const error: IError = new Error(`Email ${req.body.email} does not belong to a registered user.`);
        error.status = 404;
        return next(error);
    }
    if (req.body.pwd) {
        var isValid = await bcrypt.compare(req.body.pwd, user.pwd);
        if (!isValid) {
            const error: IError = new Error(`incorrect password`)
            error.status = 401;
            return next(error);
        }
    }
    const tokens = issueJWT(user);
    return res.json({ user, tokens });
}
export const fetchUser = async (req: ProtectedReq, res: Response, next: NextFunction) => {
    const user = await UserRepo.findById(req.user_id);
    if (!user) {
        const error: IError = new Error(`id ${req.user_id} invalid`);
        error.status = 404;
        return next(error);
    }
    return res.json({ user });
}

export const updateUser = async (req: ProtectedReq, res: Response, next: NextFunction) => {
    const user = await UserRepo.findById(req.user_id);
    if (!user) {
        const error: IError = new Error(`id ${req.user_id} invalid`);
        error.status = 404;
        return next(error);
    }
    if (req.body.name) user.name = req.body.name;
    if (req.body.communities) user.communities = req.body.communities;
    if (req.body.interests) user.interests = req.body.interests;
    if (req.body.saved_articles) user.saved_articles = req.body.saved_articles;

    try {
        const updatedUser = await UserRepo.update(user)
        return res.json({ user: updatedUser });
    } catch (err) {
        const error: IError = new Error(`Error in updating user`);
        error.error = err;
        return next(error);
    }
}