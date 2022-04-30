const express = require("express");
const router = express.Router();
const fs = require("fs");
const { connected } = require("process");

// Function to read and parse json file
function readVideosJson() {
    const videoJson = fs.readFileSync("./data/videos.json")
    const videoJsonParsed = JSON.parse(videoJson);
    return videoJsonParsed;
}

module.exports = router;