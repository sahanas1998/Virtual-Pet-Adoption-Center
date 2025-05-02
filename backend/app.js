const express = require("express");
const cors = require("cors");
const PetRoutes = require("./routes/PetRoutes");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/pets", PetRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


module.exports = app;
