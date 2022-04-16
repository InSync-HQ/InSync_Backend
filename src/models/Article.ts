import { Schema, Document, model } from "mongoose";
import { requiredString, optionalString, numberField, optionalStringArray } from "./reusableModelComp"

export const DOCUMENT_NAME = "article";
export const COLLECTION_NAME = "articles";

export default interface IArticle extends Document {
    source_url: string;
    media_url?: string;
    desc?: string;
    upvotes: number;
    downvotes: number;
    comments?: string[];
    createdAt?: Date;
    updatedAt?: Date;
}


export const articleSchema = new Schema({
    source_url: { ...requiredString },
    media_url: { ...optionalString },
    desc: { ...optionalString },
    upvotes: { ...numberField },
    downvotes: { ...numberField },
    comments: { ...optionalStringArray },
});


export const ArticleModel = model<IArticle>(
    DOCUMENT_NAME,
    articleSchema,
    COLLECTION_NAME
);