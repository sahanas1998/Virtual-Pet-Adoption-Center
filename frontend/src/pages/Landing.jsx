import React, { useEffect, useState } from "react";
import PetCard from "../components/PetCard";
import { getPets } from "../services/api"; // import from your API file

function Landing() {
  const [pets, setPets] = useState([]);

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

  return (
    <div className="py-[40px] lg:px-[24px] px-[16px] bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center justify-center text-[32px] font-bold">
            <h3>Pets Details</h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
            {pets.map((pet) => (
              <PetCard
                key={pet._id || pet.id}
                id={pet._id}
                name={pet.name}
                age={pet.age}
                personality={pet.personality}
                species={pet.species}
                isAdpote={pet.adopted}
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
