export const db = {
    envUrl: process.env.DB_DEV_URL || "",
    prodUrl: process.env.DB_PROD_URL || "",
}
export const environment = process.env.NODE_ENV || "";
export const port = process.env.PORT || 3000;