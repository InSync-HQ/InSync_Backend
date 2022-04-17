import { NextFunction, Request, Response } from "express";
import CommunityRepo from '../db/repositories/CommunityRepo'
import { IError, ProtectedReq } from "../types/types";

export const createCommunity = async (req: ProtectedReq, res: Response, next: NextFunction) => {
    const communityExists = await CommunityRepo.fetchByName(req.body.name);
    if (communityExists) {
        const error: IError = new Error(`community by name ${req.body.name} already exists. Try another name.`);
        error.status = 404;
        return next(error);
    }
    try {
        const community = await CommunityRepo.create(req.body);
        return res.json({ community });
    } catch (err) {
        const error: IError = new Error(`Error in creating community`);
        error.error = err;
        return next(error);
    }
}

export const fetchAllCommunity = async (req: ProtectedReq, res: Response, next: NextFunction) => {
    const communties = await CommunityRepo.fetchAll();
    return res.json({ communties });
}

export const updateCommunity = async (req: ProtectedReq, res: Response, next: NextFunction) => {
    let community = await CommunityRepo.findById(req.params.id);
    if (!community) {
        const error: IError = new Error(`community id ${req.user_id} invalid/not found`);
        error.status = 404;
        return next(error);
    }
    Object.assign(community, req.body);
    try {
        const updatedCommunity = await CommunityRepo.update(community)
        return res.json({ community: updatedCommunity });
    } catch (err) {
        const error: IError = new Error(`Error in updating user`);
        error.error = err;
        return next(error);
    }
}