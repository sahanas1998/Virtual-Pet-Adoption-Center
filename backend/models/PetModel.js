const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: String,
  species: String,
  age: Number,
  personality: String,
  image: String,
  adopted: { type: Boolean, default: false },
  adoption_date: Date,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Pet", petSchema);
