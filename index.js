require("dotenv").config();
const { PORT, BACKEND_URL} = process.env;
const express = require("express");
const app = express();

app.get("/", (_req, res) => {
    res.send("Hello World. Connected");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});