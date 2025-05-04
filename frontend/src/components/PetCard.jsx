import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";
import { MdClose } from "react-icons/md";
import ViewPet from "./ViewPet";

function PetCard({
  name,
  id,
  age,
  personality,
  species,
  img,
  isAdpote,
  mood,
  adoptedDate,
}) {
  const [isUpdateFormOpen, setIsUpdateFormOpen] = useState(false);
  const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
  const [viewPet, setViewPet] = useState(false);
  return (
    <>
      <div className="cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
        <div className="bg-black border border-[#FF5500] rounded-lg text-white">
          <div className="flex flex-col">
            <div className="relative">
              <img
                src={img}
                alt="pet"
                className="rounded-t-lg h-[200px] w-full object-cover"
                onClick={() => setViewPet(true)}
              />
              {isAdpote === true && (
                <div className="absolute bottom-4 right-0 bg-[#FF5500] text-black font-bold px-3 py-2 rounded-l-lg shadow-md">
                  Adopted
                </div>
              )}
            </div>

            <div className="p-[20px] flex flex-col gap-[12px]">
              <div className="grid grid-cols-2 gap-y-1/2 md:text-[28px] text-[20px] font-mono">
                <p>{name}</p>
              </div>

              <div className="flex justify-between items-center">
                <div
                  className={`rounded text-white font-bold py-2 px-2 text-sm ${
                    mood === "Happy"
                      ? "bg-[#0f4b0f]"
                      : mood === "Excited"
                      ? "bg-[#8c941a]"
                      : "bg-[#520f0f]"
                  }`}
                >
                  {mood}
                </div>
                <div className="flex gap-[12px] items-end justify-end">
                  <div
                    className="bg-[#87d2f8] rounded p-2 text-[20px] text-black"
                    onClick={() => setIsUpdateFormOpen(true)}
                  >
                    <BiEditAlt />
                  </div>
                  <div
                    className="bg-[#b91d1d] rounded p-2 text-[20px] text-black"
                    onClick={() => setIsDeleteFormOpen(true)}
                  >
                    <RiDeleteBin6Line />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isUpdateFormOpen && (
        <div className="fixed top-0 left-0 w-full bg-black bg-opacity-50 z-50 py-10">
          <div className="container mx-auto">
            <div className="bg-white p-6 rounded-lg max-w-lg w-full mx-auto relative">
              <button
                onClick={() => setIsUpdateFormOpen(false)}
                className="absolute top-4 right-4 text-black text-[32px] font-bold"
              >
                <MdClose />
              </button>
              <UpdateForm
                onClose={() => setIsUpdateFormOpen(false)}
                petId={id}
              />
            </div>
          </div>
        </div>
      )}

      {isDeleteFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              onClick={() => setIsDeleteFormOpen(false)}
              className="absolute top-4 right-4 text-black text-[32px] font-bold"
            >
              <MdClose />
            </button>
            <DeleteForm onClose={() => setIsDeleteFormOpen(false)} petId={id} />
          </div>
        </div>
      )}

      {viewPet && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white p-12 rounded-lg max-w-lg w-full relative">
            <button
              onClick={() => setViewPet(false)}
              className="absolute top-4 right-4 text-black text-[32px] font-bold"
            >
              <MdClose />
            </button>
            <ViewPet
              onClose={() => setViewPet(false)}
              name={name}
              id={id}
              age={age}
              personality={personality}
              species={species}
              img={img}
              isAdpote={isAdpote}
              mood={mood}
              adoptedDate={adoptedDate}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default PetCard;
