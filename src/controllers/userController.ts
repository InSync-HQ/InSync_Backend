import { UserModel, userSchema, IUser } from './../models/User';
import { Request, Response } from "express";
import { Registervalidation, LoginValidation } from "./validation";
import * as bcrypt from "bcrypt"

export const registerUser = async (req: Request, res: Response) => {
    const { error } = await Registervalidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const emailExists = await UserModel.findOne({ email: req.body.email });
    if (emailExists)
        return res.status(400).send("Email already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.pwd, salt);

    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        pwd: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    }
    catch (err) {
        res.status(400).send(err);
    }
}
export const loginUser = async (req: Request, res: Response) => {
    const { error } = await LoginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
}
export const fetchUser = async (req: Request, res: Response) => {
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user)
        return res.status(404).send("Email or Password is wrong");

    const validpwd = await bcrypt.compare(req.body.pwd, user.pwd);
}