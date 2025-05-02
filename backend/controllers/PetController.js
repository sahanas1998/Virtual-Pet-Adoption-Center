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
  const updated = await PetService.updatePet(req.params.id, req.body);
  res.json(updated);
};

exports.adoptPet = async (req, res) => {
  const adopted = await PetService.adoptPet(req.params.id);
  res.json(adopted);
};

exports.deletePet = async (req, res) => {
  await PetService.deletePet(req.params.id);
  res.json({ message: "Pet deleted" });
};

exports.filterByMood = async (req, res) => {
  const pets = await petService.filterByMood(req.query.mood);
  res.json(pets);
};

