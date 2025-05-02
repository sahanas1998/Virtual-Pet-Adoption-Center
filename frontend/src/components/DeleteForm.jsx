import React from "react";

function DeleteForm({ onClose }) {
  return (
    <>
      <div className="flex flex-col md:gap-[18px] gap-[10px] text-black">
        <h3 className="md:text-[28px] text-[20px] font-bold text-center ">
          Delete Pet Details
        </h3>
        <div className="flex flex-col gap-[10px]">
          <label className="md:text-[20px] text-[14px] font-semibold">
            Do you want to delete this pet details ?
          </label>
          <button
            type="button"
            className="w-full bg-black text-white md:py-4 py-2 rounded font-bold md:text-[20px] text-[14px]"
          >
            Yes
          </button>
          <button
            onClick={onClose}
            type="button"
            className="w-full bg-[#FF5500] text-black md:py-4 py-2 rounded font-bold md:text-[20px] text-[14px]"
          >
            No
          </button>
        </div>
      </div>
    </>
  );
}

export default DeleteForm;
