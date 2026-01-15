const express = require("express");
// [TODO]
// Include other required modules

const router = express.Router();

router.get("/", function (req, res) {
  // [TODO]
  // Implement: Display list of subscribed podcasts
});

router.get("/podcast", function (req, res) {
  // [TODO]
  // Implement: Show detail page for the podcast with the given
  // index (index is provided as a request/query parameter,
  // access with: req.query.pc)
});

router.get("/episode", function (req, res) {
  // [TODO]
  // Implement: Show detail page for the episode (indices
  // are provided as request/query parameters, access with:
  // req.query.pc and req.query.ep)
});

router.post("/subscribe", function (req, res) {
  // [TODO]
  // Implement: Subscribe to a podcast
});

module.exports = router;
