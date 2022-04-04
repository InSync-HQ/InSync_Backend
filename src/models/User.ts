import { Schema, Document, Model } from "mongoose";


export const DOCUMENT_NAME = "user";
export const COLLECTION_NAME = "users";

export interface IUser {
    email: string;
    pwd: string;
    communities: string[];
    saved_articles: string[];
    interests: string[];
}

