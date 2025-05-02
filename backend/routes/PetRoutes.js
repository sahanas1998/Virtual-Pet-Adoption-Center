const express = require("express");
const router = express.Router();
const multer = require("multer");
const PetController = require("../controllers/PetController");

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Use multer middleware in POST route
router.post("/", upload.single("image"), PetController.createPet);
console.log("Received pet creation request");

// other routes...
router.get("/", PetController.getAllPets);
router.get("/:id", PetController.getPet);
router.put("/:id", PetController.updatePet);
router.patch("/:id/adopt", PetController.adoptPet);
router.delete("/:id", PetController.deletePet);

module.exports = router;
