const fs = require("fs");
const path = require("path");
exports.saveResponses = (req, res) => {
  try {
    const newResponse = req.body;
    if (!newResponse || typeof newResponse !== "object") {
      return res.status(400).json({ error: "Invalid request body" });
    }
    if (!Array.isArray(newResponse.responses)) {
      return res.status(400).json({ error: "Responses must be an array" });
    }
    if (newResponse.responses.length !== 5) {
      return res.status(400).json({ error: "Exactly 5 responses required" });
    }
    for (let item of newResponse.responses) {
      if (!item.question || item.question.trim() === "") {
        return res.status(400).json({ error: "Question is required" });
      }
      if (!item.answer || item.answer.trim() === "") {
        return res.status(400).json({ error: "Answer is required" });
      }
      if (item.answer.trim().length < 2) {
        return res.status(400).json({ error: "Answer too short" });
      }
    }
    const filePath = path.join(__dirname, "../data/responses.json");
    const data = fs.readFileSync(filePath, "utf-8");
    const responses = JSON.parse(data);
    responses.push(newResponse);
    fs.writeFileSync(filePath, JSON.stringify(responses, null, 2));
    return res.status(200).json({ message: "Response saved successfully" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Error" });
  }
};