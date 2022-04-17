import { Request } from "express";

interface IError extends Error {
    status?: number;
    error?: any;
}

interface ProtectedReq extends Request {
    user_id?: any;
}