import React, { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import { getPets } from "../services/api";

function Landing() {
  const [pets, setPets] = useState([]);
  const [selectedMood, setSelectedMood] = useState("");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await getPets();
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  // Filter pets by mood
  const filteredPets = selectedMood
    ? pets.filter(
        (pet) => pet.mood.toLowerCase() === selectedMood.toLowerCase()
      )
    : pets;

  return (
    <div className="py-[40px] lg:px-[24px] px-[16px] bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[20px]">
          <div className="flex md:flex-row flex-col gap-[12px] justify-between items-center">
            <h3 className="text-[32px] font-bold">Pets Details</h3>
            <select
              className="border border-[#FF5500] text-[#FF5500] rounded bg-black p-4 w-[300px] focus:border-[#FF5500] focus:outline-none active:border-[#FF5500]"
              value={selectedMood}
              onChange={(e) => setSelectedMood(e.target.value)}
            >
              <option value="">All</option>
              <option value="Happy">Happy</option>
              <option value="Sad">Sad</option>
              <option value="Excited">Excited</option>
            </select>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
            {filteredPets.map((pet) => (
              <PetCard
                key={pet._id || pet.id}
                id={pet._id}
                name={pet.name}
                age={pet.age}
                personality={pet.personality}
                species={pet.species}
                isAdpote={pet.adopted}
                adoptedDate={pet.adoption_date}
                img={`http://localhost:5000/uploads/${pet.image}`}
                mood={pet.mood}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
