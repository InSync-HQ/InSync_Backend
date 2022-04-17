import { Schema } from "mongoose";


export const requiredString = {
    type: Schema.Types.String,
    required: true,
    trim: true,
};

export const optionalString = {
    type: Schema.Types.String,
    trim: true,
}
export const optionalStringArray = {
    type: [Schema.Types.String],
    trim: true,
    default: [] as string[],
}

export const requiredUserId = {
    type: Schema.Types.ObjectId,
    ref: "user",
    required: true,
}

export const optionalUserArray = {
    type: [Schema.Types.ObjectId],
    ref: "user",
    default: [] as string[]
}

export const optionalCommuntiesArray = {
    type: [Schema.Types.ObjectId],
    ref: "community",
    default: [] as string[],
}
export const requiredDate = {
    type: Schema.Types.Date,
    required: true,
}

export const optionalArticleArray = {
    type: [Schema.Types.ObjectId],
    ref: "article",
    default: [] as string[],
}

export const requiredArticleId = {
    type: Schema.Types.ObjectId,
    ref: "article",
    required: true,
}

export const requiredStringArray = {
    type: [Schema.Types.String],
    required: true,
    default: [] as string[],
    trim: true,
}

export const requiredTimestamp = {
    type: Schema.Types.Date,
    required: true,
    trim: true,
    default: Date.now
}

export const numberField = {
    type: Schema.Types.Number,
    default: 0,
}
