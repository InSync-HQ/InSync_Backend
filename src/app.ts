import express from "express";
import cors from "cors";

import routes from "./router"

const app = express();
const PORT = process.env.PORT || 3000;

process.on("uncaughtException", (e) => {
    console.error(e);
});

app.use(express.json({ limit: "10mb" }));
app.use(
    express.urlencoded({ extended: true, limit: "10mb", parameterLimit: 50000 })
);
app.use(cors({ origin: "*" }));



app.get("/", (req, res) => {
    return res.send("Welcome to the Insync Backend v1.0.0")
})

app.use("/", routes);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})