import { Schema, Document, model } from "mongoose";
import { IUser } from "./User";
import { requiredString, requiredStringArray, optionalStringArray, optionalString } from "./reusableModelComp"

export const DOCUMENT_NAME = "community";
export const COLLECTION_NAME = "communities";

export interface ICommunity extends Document {
    name: string;
    desc?: string;
    interests?: string[];
    mod_id: string;
    users?: string[];
    newsfeed?: string[];
}

export const communitySchema = new Schema({
    name: { ...requiredString },
    mod_id: { ...requiredString },
    desc: { ...optionalString },
    interests: { ...optionalStringArray },
    users: { ...optionalStringArray },
    newsfeed: { ...optionalStringArray }
});

export const CommunityModel = model<ICommunity>(
    DOCUMENT_NAME,
    communitySchema,
    COLLECTION_NAME
);