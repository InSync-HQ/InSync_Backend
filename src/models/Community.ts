import { Schema, Document, model } from "mongoose";
import { IUser } from "./User";
import { requiredString, requiredStringArray, optionalStringArray } from "./reusableModelComp"

export const DOCUMENT_NAME = "community";
export const COLLECTION_NAME = "communities";

export interface ICommunity extends Document {
    name: string;
    desc: string;
    interests: string[];
    mod_id: string;
    users: string[];
    newsfeed: string[];
}

export const communitySchema = new Schema({
    name: { ...requiredString },
    desc: { ...requiredString },
    interests: { ...requiredStringArray },
    mod_id: { ...requiredString },
    users: { ...requiredStringArray },
    newsfeed: { ...requiredStringArray }
});

export const CommunityModel = model<ICommunity>(
    DOCUMENT_NAME,
    communitySchema,
    COLLECTION_NAME
);