import { Schema, Document, Model } from "mongoose";
import { IUser } from "./User";


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