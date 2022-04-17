import { NextFunction, Request, Response } from "express";
import ArticleRepo from "../db/repositories/ArticleRepo";
import { IError } from "../types/types";

export const createArticle = async (req: Request, res: Response, next: NextFunction) => {
    const articleExists = await ArticleRepo.findByArticleUrl(req.body.article_url);
    if (articleExists) {
        const error: IError = new Error(`article with article_url ${req.body.article_url} alreday exists`)
        error.status = 404;
        return next(error);
    }
    try {
        const createdArticle = await ArticleRepo.create(req.body);
        return res.json({ artice: createdArticle });
    } catch (err) {
        const error: IError = new Error(`error in creating article.`);
        error.error = err;
        return next(error);
    }
}

export const fetchAllArticles = async (req: Request, res: Response, next: NextFunction) => {
    const articles = await ArticleRepo.fetchAll();
    return res.json({ articles });
}

export const updateArticle = async (req: Request, res: Response, next: NextFunction) => {
    let article = await ArticleRepo.findById(req.params.id);
    if (!article) {
        const error: IError = new Error(`No such article with id ${req.params.id}`);
        error.status = 404;
        return next(error);
    }
    Object.assign(article, req.body);
    try {
        const updatedArticle = await ArticleRepo.update(article);
        return res.json({ article: updatedArticle });
    } catch (err) {
        const error: IError = new Error(`error in updating article with id ${req.params.id}`);
        return next(error);
    }
}