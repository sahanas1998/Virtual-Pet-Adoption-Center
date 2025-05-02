import { Logo } from "../constants/Data";
import React, { useState } from "react";
import AddForm from "./AddForm";
import { Link } from "react-router-dom";
import { MdClose } from "react-icons/md";

function Header() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <div className="bg-black text-[#FF5500] lg:px-0 px-[16px] border-b border-[#FF5500]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link className="flex items-center justify-center" to="/">
              <img
                src={Logo}
                alt="Logo"
                className="md:h-[100px] h-[50px] md:w-[100px] w-[50px]"
              />
              <h3 className="md:text-[24px] text-[16px] font-bold">JS Pets</h3>
            </Link>
            <div>
              <button
                onClick={() => setIsFormOpen(true)}
                className="bg-[#FF5500] md:text-[20px] text-[12px] text-black font-semibold py-[8px] px-[18px] rounded"
              >
                Add Pet
              </button>
            </div>
          </div>
        </div>
      </div>

      {isFormOpen && (
        <div className="absolute top-0 left-0 w-full bg-black bg-opacity-50 z-50 py-10 lg:px-0 px-[16px]">
          <div className="container mx-auto">
            <div className="bg-white p-8 rounded-lg max-w-lg w-full mx-auto relative">
              <button
                onClick={() => setIsFormOpen(false)}
                className="absolute top-4 right-4 text-black text-[32px] font-bold"
              >
                <MdClose/>
              </button>
              <AddForm onClose={() => setIsFormOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
