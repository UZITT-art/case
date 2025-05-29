import { Menu } from "lucide-react";
import React, { useState } from "react";

const Drawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="relative  max-w-7xl mx-auto md:hidden lg:hidden xl:hidden">
      <h1>
        <Menu
          onClick={toggleDrawer}
          className=" text-black hover:to-green-400 cursor-pointer w-10 h-10"
        />
      </h1>
      {isDrawerOpen && (
        <div className=" absolute top-0 left-0  container flex flex-col gap-3 justify-center items-center text-[16px] font-[400] bg-red-500 p-16 m-3">
          <ul>
            <li className=" cursor-pointer hover:text-gray-400 ">Home</li>
            <li className=" cursor-pointer hover:text-white ">About</li>
            <li className=" cursor-pointer hover:text-white ">Detail</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default drawer;
