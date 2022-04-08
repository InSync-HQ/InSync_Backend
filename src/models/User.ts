import { Schema, Document, model } from "mongoose";
import { requiredString, optionalStringArray, requiredStringArray } from "./reusableModelComp"

export const DOCUMENT_NAME = "user";
export const COLLECTION_NAME = "users";

export interface IUser extends Document {
    name: string;
    email: string;
    pwd: string;
    communities?: string[];
    saved_articles?: string[];
    interests?: string[];
}

export const userSchema = new Schema({
    name: { ...requiredString },
    email: { ...requiredString },
    pwd: { ...requiredString },
    communities: { ...optionalStringArray },
    saved_articles: { ...optionalStringArray },
    interests: { ...optionalStringArray }
});

export const UserModel = model<IUser>(
    DOCUMENT_NAME,
    userSchema,
    COLLECTION_NAME
);