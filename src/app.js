const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    return res.send("Welcome to the Insync Backend v1.0.0")
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})