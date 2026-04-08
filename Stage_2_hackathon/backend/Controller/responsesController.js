const fs = require("fs");
exports.saveResponses = (req, res) => {
  try {
    const newResponse = req.body;
    const data = fs.readFileSync("./data/responses.json", "utf-8");
    const responses = JSON.parse(data);
    responses.push(newResponse);
    fs.writeFileSync("./data/responses.json", JSON.stringify(responses, null, 2));
    res.status(200).json({ message: "Response saved successfully" });
  } catch(err) {
    res.status(500).json({ error: "Error" });
  }
};