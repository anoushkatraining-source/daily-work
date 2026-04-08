const express = require("express");
const router = express.Router();
const controller = require("../Controller/responsesController");
router.post("/", controller.saveResponses);
module.exports = router;