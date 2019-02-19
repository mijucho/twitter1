const express = require("express");
const router = express.Router();
const { getTweets, getTweetsByUsername } = require("../db/tweets");

// GET /api/v1/tweets
router.get("/", (req, res) => {
  getTweets()
    .then(tweets => {
      res.json(tweets);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Somthing went wrong" });
    });
});

// POST /api/v1/tweets
router.post("/", (req, res) => {
  res.json({
    id: 6
  });
});

// GET /api/v1/tweets/:username
router.get("/", (req, res) => {
  getTweetsByUsername(req.params.username)
    .then(tweets => {
      res.json(tweets);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Somthing went wrong" });
    });
});

module.exports = router;
