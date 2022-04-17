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
