const questionService = require("../services/question_service");
exports.getQuestions = (req, res) => {
const data = questionService.readFile("../data/questions.json");
  if (data.length === 0) {
    return res.status(404).json({ error: "Questions not found or JSON invalid" });
  }
  res.json(data);
};