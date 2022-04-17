import { Schema, Document, model } from "mongoose";
import { requiredString, optionalString, numberField, optionalStringArray, requiredDate } from "./reusableModelComp"

export const DOCUMENT_NAME = "article";
export const COLLECTION_NAME = "articles";

export default interface IArticle extends Document {
    article_url: string;
    img_url?: string;
    desc?: string;
    content?: string,
    title?: string,
    upvotes: number;
    downvotes: number;
    publishedAt?: string;
    createdAt: Date;
    updatedAt: Date;
}


export const articleSchema = new Schema({
    article_url: { ...requiredString },
    img_url: { ...optionalString },
    title: { ...optionalString },
    desc: { ...optionalString },
    content: { ...optionalString },
    publishedAt: { ...optionalString },
    upvotes: { ...numberField },
    downvotes: { ...numberField },
    createdAt: { ...requiredDate },
    updatedAt: { ...requiredDate },
});


export const ArticleModel = model<IArticle>(
    DOCUMENT_NAME,
    articleSchema,
    COLLECTION_NAME
);