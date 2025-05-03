const Pet = require("../models/PetModel");
const { getMood } = require("../utils/moodLogic");

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



exports.adoptPet = async (id) =>
  await Pet.findByIdAndUpdate(
    id,
    { adopted: true, adoption_date: new Date() },
    { new: true }
  );

exports.deletePet = async (id) => await Pet.findByIdAndDelete(id);

exports.filterByMood = async (mood) => {
  const pets = await Pet.find();
  return pets
    .filter((pet) => getMood(pet.createdAt) === mood)
    .map((p) => ({ ...p.toObject(), mood }));
};
