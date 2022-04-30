require("dotenv").config();
const { PORT, BACKEND_URL} = process.env;
const express = require("express");
const app = express();
const fs = require("fs");
const videoRoutes = require("./routes/video.js")

app.use(express.json());
app.use(express.static("public"));

app.get("/", (_req, res) => {
    res.send("Hello World. Connected");
});

app.use("/api/v1/videos", videoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});