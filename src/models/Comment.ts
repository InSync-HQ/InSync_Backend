import { Schema, Document, model } from "mongoose";
import { requiredString, numberField } from "./reusableModelComp"

export const DOCUMENT_NAME = "comment";
export const COLLECTION_NAME = "comments";

export interface IComment extends Document {
    content: string;
    upvotes: number;
    downvotes: number;
}

export const commentSchema = new Schema({
    content: { ...requiredString },
    upvotes: { ...numberField },
    downvotes: { ...numberField }
});

export const CommentModel = model<IComment>(
    DOCUMENT_NAME,
    commentSchema,
    COLLECTION_NAME
);