const express = require("express");
const cors = require("cors");
const resumeRoutes = require("./routes/resumeRoutes");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api", resumeRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});