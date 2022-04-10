import { Request, Response } from "express";
import { UserModel } from "../models/User";
import bcrypt from "bcryptjs";
export const registerUser = async (req: Request, res: Response) => {
    const emailExists = await UserModel.findOne({ email: req.body.email });
    if (emailExists)
        return res.status(400).send("Email already exists");

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.pwd, salt);

    try {
        const savedUser = await UserModel.create({
            name: req.body.name,
            email: req.body.email,
            pwd: hashedPassword
        });
        res.send(savedUser);
    }
    catch (err) {
        res.status(400).send(err);
    }
}
export const loginUser = async (req: Request, res: Response) => {

}
export const fetchUser = async (req: Request, res: Response) => {

}