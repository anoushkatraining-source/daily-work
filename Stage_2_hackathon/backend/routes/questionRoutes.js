const express = require("express");
const router = express.Router();
const controller = require("../Controller/questionsController");
router.get("/", controller.getQuestions);
module.exports = router;