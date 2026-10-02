const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

// =======================
// Middleware
// =======================

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =======================
// Routes
// =======================

app.get("/", (req, res) => {
  res.json({
    message: "Backend server is running 🚀",
  });
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "API is working",
  });
});

// =======================
// Server
// =======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
