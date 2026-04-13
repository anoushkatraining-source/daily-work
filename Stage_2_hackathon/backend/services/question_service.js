const fs = require("fs");
const path = require("path");
exports.readFile = () => {
  try {
    const filePath = path.join(__dirname, "../data/questions.json");
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading JSON file:", err.message);
    return [];
  }
};