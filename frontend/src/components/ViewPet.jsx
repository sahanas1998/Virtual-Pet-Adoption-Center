import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import UpdateForm from "./UpdateForm";
import DeleteForm from "./DeleteForm";
import { MdClose } from "react-icons/md";

function ViewPet({
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
  return (
    <>
      <div className="bg-white rounded-lg text-black">
        <div className="flex flex-col">
          <div className="relative">
            <img
              src={img}
              alt="pet"
              className="rounded-t-lg h-[200px] w-full object-cover"
            />
            {isAdpote === true && (
              <div className="absolute bottom-4 right-0 bg-[#FF5500] text-black font-bold px-3 py-2 rounded-l-lg shadow-md">
                Adopted
              </div>
            )}
          </div>

          <div className="p-[20px] flex flex-col gap-[12px]">
            <div className="grid grid-cols-2 gap-y-1/2 md:text-[18px] text-[14px] font-mono">
              <p className="font-semibold">Reg No :</p>
              <p>{id}</p>

              <p className="font-semibold">Name :</p>
              <p>{name}</p>

              <p className="font-semibold">Species :</p>
              <p>{species}</p>

              <p className="font-semibold">Age :</p>
              <p>{age}</p>

              <p className="font-semibold">Personality :</p>
              <p>{personality}</p>

              {isAdpote === true && adoptedDate && (
                <>
                  <p className="font-semibold">Adopted Date :</p>
                  <p>{new Date(adoptedDate).toLocaleDateString()}</p>
                </>
              )}
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewPet;
