const express = require("express");
const cors = require("cors");
require("dotenv").config();
const ngoRoutes = require("./routes/ngoRoutes");


const connectDB = require("./config/db");

const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/ngo", ngoRoutes);

app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});