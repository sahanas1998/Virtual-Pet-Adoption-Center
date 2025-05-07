import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/pets" });

export const getPets = () => API.get("/");
export const getPet = (id) => API.get(`/${id}`);
export const createPet = (pet) => API.post("/", pet);
export const updatePet = (id, pet) => API.put(`/${id}`, pet);
export const deletePet = (id) => API.delete(`/${id}`);
export const filterByMood = (mood) => API.get(`/filter?mood=${mood}`);
