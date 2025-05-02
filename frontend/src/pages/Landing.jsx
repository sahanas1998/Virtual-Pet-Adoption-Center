import React from "react";
import PetCard from "../components/PetCard";

const pets = [
  {
    id: "1045",
    name: "Roxcy",
    age: "4",
    personality: "shy",
    space: "Dog",
    isAdpote: true,
    img: "https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
  },
  {
    id: "1046",
    name: "Milo",
    age: "2",
    personality: "friendly",
    space: "Cat",
    isAdpote: false,
    img: "https://images.ctfassets.net/82d3r48zq721/4NdNVD9eB6QBWaSvzagFP1/7cf96a73d3edcff9211534cd05cb209b/Indoor-cat-lying-on-couch_resized.jpg?w=800&q=50",
  },
  {
    id: "1045",
    name: "Roxcy",
    age: "4",
    personality: "shy",
    space: "Dog",
    isAdpote: true,
    img: "https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
  },
  {
    id: "1046",
    name: "Milo",
    age: "2",
    personality: "friendly",
    space: "Cat",
    isAdpote: false,
    img: "https://images.ctfassets.net/82d3r48zq721/4NdNVD9eB6QBWaSvzagFP1/7cf96a73d3edcff9211534cd05cb209b/Indoor-cat-lying-on-couch_resized.jpg?w=800&q=50",
  },
  {
    id: "1045",
    name: "Roxcy",
    age: "4",
    personality: "shy",
    space: "Dog",
    isAdpote: true,
    img: "https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
  },
  {
    id: "1046",
    name: "Milo",
    age: "2",
    personality: "friendly",
    space: "Cat",
    isAdpote: false,
    img: "https://images.ctfassets.net/82d3r48zq721/4NdNVD9eB6QBWaSvzagFP1/7cf96a73d3edcff9211534cd05cb209b/Indoor-cat-lying-on-couch_resized.jpg?w=800&q=50",
  },
  {
    id: "1045",
    name: "Roxcy",
    age: "4",
    personality: "shy",
    space: "Dog",
    isAdpote: true,
    img: "https://hips.hearstapps.com/hmg-prod/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1xw:0.84375xh;center,top&resize=1200:*",
  },
  {
    id: "1046",
    name: "Milo",
    age: "2",
    personality: "friendly",
    space: "Cat",
    isAdpote: false,
    img: "https://images.ctfassets.net/82d3r48zq721/4NdNVD9eB6QBWaSvzagFP1/7cf96a73d3edcff9211534cd05cb209b/Indoor-cat-lying-on-couch_resized.jpg?w=800&q=50",
  },
];

function Landing() {
  return (
    <div className="py-[40px] lg:px-[24px] px-[16px] bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[20px]">
          <div className="flex items-center justify-center text-[32px] font-bold">
            <h3>Pets Details</h3>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]">
            {pets.map((pet, index) => (
              <PetCard
                key={index}
                id={pet.id}
                name={pet.name}
                age={pet.age}
                personality={pet.personality}
                space={pet.space}
                isAdpote={pet.isAdpote}
                img={pet.img}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
