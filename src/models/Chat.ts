import { Schema, Document, model } from "mongoose";
import { optionalStringArray, requiredTimestamp } from "./reusableModelComp"

export const DOCUMENT_NAME = "chat";
export const COLLECTION_NAME = "chats";

export interface IChat extends Document {
    content: string[];
    timestamp: Date;
}

export const chatSchema = new Schema({
    content: { ...optionalStringArray },
    timestamp: { ...requiredTimestamp },
});

export const ChatModel = model<IChat>(
    DOCUMENT_NAME,
    chatSchema,
    COLLECTION_NAME
);