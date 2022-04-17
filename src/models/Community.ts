import { Schema, Document, model } from "mongoose";
import { requiredString, optionalStringArray, optionalString, requiredUserId, optionalUserArray } from "./reusableModelComp"

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
    mod_id: { ...requiredUserId },
    desc: { ...optionalString },
    interests: { ...optionalStringArray },
    users: { ...optionalUserArray },
    newsfeed: { ...optionalStringArray }
});

export const CommunityModel = model<ICommunity>(
    DOCUMENT_NAME,
    communitySchema,
    COLLECTION_NAME
);