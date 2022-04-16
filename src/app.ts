import express, { NextFunction, Request, Response } from "express";
import cors from "cors";

import routes from "./router"
import { port } from "./config";
import requestlogger from "./core/requestlogger";
import morgan from "morgan";
import logger from "./core/logger";
import passport from 'passport'

import "./db";


import passportMiddleware from './helpers/passport'
passportMiddleware(passport);


const app = express();

process.on("uncaughtException", (e) => {
    logger.error(e);
});

app.use(express.json({ limit: "10mb" }));
app.use(
    express.urlencoded({
        limit: "10mb",
        extended: true,
        parameterLimit: 50000,
    })
);
app.use(cors({ origin: "*", optionsSuccessStatus: 200 }));
app.use(morgan("tiny", { stream: requestlogger }));
app.use(passport.initialize());


app.get("/", (req, res) => {
    return res.send("Welcome to the Insync Backend v1.0.0")
})

app.use("/", routes);

// catch 404 and forward to error handler
app.use((req, res, next) => next(new Error(`No Such route Found: ${res.req.originalUrl}`)));

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    logger.error(err);
    return res.status(500).send(err.message);
})

app.listen(port, () => {
    console.log(`Server started at port:${port}`);
})