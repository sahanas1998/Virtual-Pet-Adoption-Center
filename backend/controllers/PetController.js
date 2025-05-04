const PetService = require("../services/PetService");

exports.createPet = async (req, res) => {
  try {
    const imageFile = req.file ? req.file.filename : null;
    const pet = await PetService.createPet(req.body, imageFile);
    res.status(201).json(pet);
  } catch (err) {
    console.error("Error creating pet:", err);
    res.status(500).json({ message: "Failed to create pet" });
  }
};

exports.getAllPets = async (req, res) => {
  const pets = await PetService.getAllPets();
  res.json(pets);
};

exports.getPet = async (req, res) => {
  const pet = await PetService.getPetById(req.params.id);
  res.json(pet);
};

exports.updatePet = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = { ...req.body };

    // If an image is uploaded, include it in the update
    if (req.file) {
      updateData.imagePath = req.file.path;
    }

    const updated = await PetService.updatePet(id, updateData);
    res.status(200).json(updated);
  } catch (error) {
    console.error("Error updating pet:", error);
    res
      .status(500)
      .json({ message: "Failed to update pet", error: error.message });
  }
};

exports.deletePet = async (req, res) => {
  await PetService.deletePet(req.params.id);
  res.json({ message: "Pet deleted" });
};



