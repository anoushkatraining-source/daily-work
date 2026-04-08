const express = require("express");
const cors = require("cors");
const questionRoutes = require("./routes/questionRoutes");
const responsesRoutes = require("./routes/responsesRoutes");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/questions", questionRoutes);
app.use("/responses", responseRoutes);

module.exports = app;