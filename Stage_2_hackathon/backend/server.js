const express = require("express");
const cors = require("cors");
const questionRoutes = require("./routes/questionRoutes");
const responsesRoutes = require("./routes/responsesRoutes"); 
const app = express();
app.use(cors());
app.use(express.json());
app.use("/questions", questionRoutes);
app.use("/responses", responsesRoutes);
app.get("/", (req, res) => {
  res.send("Server working");
});
app.listen(3001, () => {
  console.log("Server Listening At http://localhost:3001/");
});
module.exports = app;
