export const db = {
    devUrl: process.env.DB_DEV_URL || "",
    prodUrl: process.env.DB_PROD_URL || "",
}
export const environment = process.env.NODE_ENV || "";
export const port = process.env.PORT || 3000;
export const newsApiKey = process.env.NEWS_API_KEY || "";