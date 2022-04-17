import { Schema, Document, model } from "mongoose";
import { requiredString, numberField, requiredArticleId, requiredUserId } from "./reusableModelComp"

export const DOCUMENT_NAME = "comment";
export const COLLECTION_NAME = "comments";

export default interface IComment extends Document {
    message: string;
    article_id: string;
    user_id: string;
    upvotes?: number;
    downvotes?: number;
    createdAt: Date,
    updatedAt: Date,
}

export const commentSchema = new Schema({
    message: { ...requiredString },
    article_id: { ...requiredArticleId },
    user_id: { ...requiredUserId },
    upvotes: { ...numberField },
    downvotes: { ...numberField }
});

export const CommentModel = model<IComment>(
    DOCUMENT_NAME,
    commentSchema,
    COLLECTION_NAME
);