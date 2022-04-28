const express = require("express");
const router = express.Router();
const fs = require("fs");

router.get("/", (_req, res) => {
    const videoContents = fs.readFileSync("./data/videos.json")
    const videoContentsParsed = JSON.parse(videoContents);
    res.status(200).send(videoContentsParsed);
});

module.exports = router;