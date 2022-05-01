require("dotenv").config();
const { PORT, BACKEND_URL} = process.env;
const express = require("express");
const app = express();
const fs = require("fs");
const videoRoutes = require("./routes/video.js")
const cors = require("cors");

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

// For side video requests
app.use("/videos", videoRoutes);

// For specific video request
app.use("/", videoRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});