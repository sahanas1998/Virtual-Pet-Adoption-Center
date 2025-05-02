import React from "react";
import { Logo } from "../constants/Data";
import { FaLocationDot } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";

function Footer() {
  return (
    <>
      <div className="bg-black text-[#FF5500] py-[18px] md:px-[24px] px-[16px] border-b border-[#FF5500]">
        <div className="container mx-auto">
          <div className="flex flex-col gap-[20px]">
            <div className="flex flex-col gap-[2px] items-center justify-center">
              <img src={Logo} alt="Logo" className="h-[100px] w-[100px]" />
              <h3 className="text-[24px] font-bold">JS Pets</h3>
              <h3 className="md:text-[18px] text-[14px] font-semibold">
                Virtual Pet Adoption Center - Jaffna
              </h3>
            </div>
            <div className="flex md:flex-row flex-col gap-[20px] items-center justify-center">
              <div className="flex gap-[4px] items-center justify-center text-white md:text-[20px] text-[14px]">
                <FaLocationDot />
                <h4>No : 217 Navalar Road, Jaffna</h4>
              </div>
              <div className="flex gap-[4px] items-center justify-center text-white md:text-[20px] text-[14px]">
                <RiWhatsappFill />
                <h4>+94761122333</h4>
              </div>
              <div className="flex gap-[4px] items-center justify-center text-white md:text-[20px] text-[14px]">
                <IoLogoFacebook />
                <h4>JS Pets</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black text-white py-[18px] md:px-[24px] px-[16px]">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col gap-[8px]  items-center justify-between md:text-[20px] text-[14px]">
            <h1>@Virtual Pet Adoption Center - 2025</h1>
            <div className="flex md:gap-[24px] gap-[8px] underline ">
              <h2>Term & Conditions</h2>
              <h2>Privacy & Policy</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
