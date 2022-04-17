import { Schema, Document, model } from "mongoose";
import { requiredString, optionalStringArray, requiredStringArray, optionalString, optionalCommuntiesArray } from "./reusableModelComp"

export const DOCUMENT_NAME = "user";
export const COLLECTION_NAME = "users";

export interface IUser extends Document {
    email: string;
    pwd?: string;
    name?: string
    communities?: string[];
    saved_articles?: string[];
    interests?: string[];
    provider?: string // must be google,facebook,local
}

export const userSchema = new Schema({
    email: { ...requiredString },
    provider: { ...requiredString },
    pwd: { ...optionalString },
    name: { ...optionalString },
    communities: { ...optionalCommuntiesArray },
    saved_articles: { ...optionalStringArray },
    interests: { ...optionalStringArray }
});

export const UserModel = model<IUser>(
    DOCUMENT_NAME,
    userSchema,
    COLLECTION_NAME
);