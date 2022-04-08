import { UserModel } from './../models/User';
import { Request, Response } from "express";
import { Registervalidation, LoginValidation } from "./validation";

export const registerUser = async (req: Request, res: Response) => {
    const { error } = Registervalidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }

    const user = new UserModel({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
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
    const { error } = LoginValidation(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    const user = new UserModel({
        email: req.body.email,
        password: req.body.password
    });
}
export const fetchUser = async (req: Request, res: Response) => {

}