import { Schema, Document, model } from "mongoose";
import { requiredString, numberField } from "./reusableModelComp"

export const DOCUMENT_NAME = "comment";
export const COLLECTION_NAME = "comments";

export interface IComment extends Document {
    content: string;
    artice_id: string;
    user_id: string;
    upvotes: number;
    downvotes: number;
}

export const commentSchema = new Schema({
    message: { ...requiredString },
    upvotes: { ...numberField },
    downvotes: { ...numberField }
});

export const CommentModel = model<IComment>(
    DOCUMENT_NAME,
    commentSchema,
    COLLECTION_NAME
);