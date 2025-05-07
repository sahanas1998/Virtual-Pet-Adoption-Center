const Pet = require("../models/PetModel");
const { getMood } = require("../utils/moodLogic");
const fs = require("fs");
const path = require("path");

exports.createPet = async (data, imageFile) => {
  const pet = new Pet({
    ...data,
    image: imageFile,
  });
  return await pet.save();
};

exports.getAllPets = async () => {
  const pets = await Pet.find();
  return pets.map((pet) => ({
    ...pet.toObject(),
    mood: getMood(pet.createdAt),
  }));
};

exports.getPetById = async (id) => {
  const pet = await Pet.findById(id);
  return { ...pet.toObject(), mood: getMood(pet.createdAt) };
};

exports.updatePet = async (id, data) => {
  return await Pet.findByIdAndUpdate(id, data, { new: true });
};

exports.deletePet = async (id) => {
  const pet = await Pet.findById(id);
  if (pet && pet.image) {
    const imagePath = path.join(__dirname, "../uploads", pet.image);
    fs.unlink(imagePath, (err) => {
      if (err) console.error("Error deleting image file:", err);
    });
  }
  return await Pet.findByIdAndDelete(id);
};
