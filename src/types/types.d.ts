interface IError extends Error {
    status?: number;
    error?: any;
}