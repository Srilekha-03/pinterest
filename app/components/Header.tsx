import Image from "next/image";
import React from "react";
import { HiBell, HiChat, HiSearch } from "react-icons/hi";

const Header = () => {
  return (
    <div className="flex gap-3 md:gap-2 items-center p-6 ">
      <Image
        src="/logo.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 cursor-pointer rounded-full"
      />
      <button className="bg-black text-white p-2 px-5 rounded-full">
        Home
      </button>
      <button className="p-2 px-5 rounded-full font-semibold">Create</button>
      <div className="bg-[#e9e9e9] p-3 gap-3 items-center rounded-full w-full hidden md:flex">
        <HiSearch className="text-[25px] text-gray-500" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none"
        />
      </div>
      <HiSearch
        className="text-[25px] 
        text-gray-500 md:hidden"
      />
      <HiBell className="text-[40px] text-gray-500" />
      <HiChat className="text-[40px] text-gray-500" />
      <Image
        src="/man.png"
        alt="logo"
        width={50}
        height={50}
        className="hover:bg-gray-300 p-2 cursor-pointer rounded-full"
      />
    </div>
  );
};

export default Header;
