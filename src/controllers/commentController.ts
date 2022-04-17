import { Request, Response, NextFunction } from "express";
import { IError, ProtectedReq } from "../types/types";
import CommentRepo from '../db/repositories/CommentRepo'
import ArticleRepo from "../db/repositories/ArticleRepo";
export const createComment = async (req: ProtectedReq, res: Response, next: NextFunction) => {
    try {
        req.body.user_id = req.user_id;
        const createdComment = await CommentRepo.create(req.body);
        return res.json({ comment: createdComment });
    } catch (err) {
        const error: IError = new Error(`error in creating comment`);
        error.error = err;
        return next(error);
    }
}


export const fetchCommentsForArticle = async (req: ProtectedReq, res: Response, next: NextFunction) => {
    const article = await ArticleRepo.findById(req.params.article_id);
    if (!article) {
        const error: IError = new Error(`Article id ${req.params.article_id} is invalid. cannot create comment`)
        error.status = 404;
        return next(error);
    }
    try {
        const comments = await CommentRepo.fetchByArticleId(article._id);
        return res.json({ comments });
    } catch (err) {
        const error: IError = new Error(`error in fetching comments by article id`);
        error.error = err;
        return next(error);
    }
}

export const updateComment = async (req: ProtectedReq, res: Response, next: NextFunction) => {
    let comment = await CommentRepo.findById(req.params.id);
    if (!comment) {
        const error: IError = new Error(`Comment id ${req.params.id} is invalid. cannot create comment`)
        error.status = 404;
        return next(error);
    }

    Object.assign(comment, req.body);
    try {
        const comments = await CommentRepo.update(comment);
        return res.json({ comments });
    } catch (err) {
        const error: IError = new Error(`error in fetching comments`);
        error.error = err;
        return next(error);
    }
}