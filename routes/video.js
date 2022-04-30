const { timeStamp } = require("console");
const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid")
router.use(express.json());


// Function to read and parse json file
function readVideosJson() {
    const videoJson = fs.readFileSync("./data/videos.json")
    const videoJsonParsed = JSON.parse(videoJson);
    return videoJsonParsed;
}

// Function to write videos
function writeVideos(video) {
    const stringifyVideo = JSON.stringify(video);
    fs.writeFileSync("./data/videos.json", stringifyVideo);
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

// Posting video to JSON
router.post("/", (req, res) => {
    const videos = readVideosJson();
    const newVideo = {
        title: req.body.title,
        image: "https://media.wired.co.uk/photos/607d91994d40fbb952b6ad64/4:3/w_2664,h_1998,c_limit/wired-meme-nft-brian.jpg",
        id: uniqid(),
        views: 2043765,
        likes: 400058,
        timeStamp: 1631892222000,
        description: "This is a video description",
        channel: "BrainStation",
        comments: [
            {
                "name": "John Doe",
                "comment": "They BLEW the ROOF off at their last event, once everyone started figuring out they were going. This is still simply the greatest opening of an event I have EVER witnessed.",
                "likes": 0,
                "timestamp": 1628522461000
            }, {
                "name": "Doe John",
                "comment": "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself!",
                "likes": 0,
                "timestamp": 1626359541000
            }, {
                "name": "Don Johe",
                "comment": "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Every time I see him I feel instantly happy! He's definitely my favorite ever!",
                "likes": 0,
                "timestamp": 1626011132000
            }
        ],
    };
    videos.push(newVideo);
    writeVideos(videos);
    res.status(200).send(newVideo);
});

module.exports = router;