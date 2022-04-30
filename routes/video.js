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

// Request for side video content
router.get("/", (_req, res) => {
    const videoContents = readVideosJson();
    
    const sideVideosContent = videoContents.map((sideVideo) => {
        return {
            id: sideVideo.id,
            title: sideVideo.title,
            channel: sideVideo.channel,
            image: sideVideo.image
        }
    });
    res.status(200).send(sideVideosContent);
});

// Request for specific video content
router.get("/video/:videoId", (req, res) => {
    const videos = readVideosJson();
    const selectedVideo = videos.find((video) => video.id === req.params.videoId);
    
    res.status(200).send(selectedVideo);
});

module.exports = router;