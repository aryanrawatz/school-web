const connectDB = require("./config/db");
const admissionRoutes = require("./routes/admissionRoutes");
const express = require("express");
const contactRoutes = require("./routes/contactRoutes");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/admission", admissionRoutes);

app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Server Running Successfully 🚀");
});

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});