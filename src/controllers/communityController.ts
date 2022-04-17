import { NextFunction, Request, Response } from "express";
import CommunityRepo from '../db/repositories/CommunityRepo'
import { IError } from "../types/types";

export const createCommunity = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const community = CommunityRepo.create(req.body);
        return res.json({ community });
    } catch (err) {
        const error: IError = new Error(`Error in creating community`);
        error.error = err;
        next(error);
    }
}