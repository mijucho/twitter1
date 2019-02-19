const express = require("express");
const router = express.Router();

// GET /api/v1/tweets
router.get("/", (req, res) => {
  res.json([
    {
      id: 5,
      text: "Hi"
    }
  ]);
});

// POST /api/v1/tweets
router.post("/", (req, res) => {
  res.json({
    id: 6
  });
});

// GET /api/v1/tweets/:username
router.get("/", (req, res) => {
  res.json([
    {
      id: 6,
      text: "Hi"
    }
  ]);
});

module.exports = router;
