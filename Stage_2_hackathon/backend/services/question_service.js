const fs = require("fs");
const path = require("path");

exports.readFile = (filePath) => {
  try {
    // Resolve the path to ensure it finds the data folder correctly
    const absolutePath = path.resolve(__dirname, filePath);
    const data = fs.readFileSync(absolutePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading JSON file:", err.message);
    return []; // Returns empty array if file is missing or JSON is broken
  }
};

exports.writeFile = (filePath, data) => {
  const absolutePath = path.resolve(__dirname, filePath);
  fs.writeFileSync(absolutePath, JSON.stringify(data, null, 2));
};