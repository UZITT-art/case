import React, { useState } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { IoMdArrowRoundBack } from "react-icons/io";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <>
      {/* Header Section */}
      <div className="w-full h-12 bg-white shadow-lg opacity-1 sticky top-0 z-50 flex justify-between items-center px-4 md:px-0 ">
        <div className="flex-grow">
          <button
            onClick={toggleDrawer}
            className="md:hidden p-2  text-white rounded"
          >
            <CiMenuBurger />
          </button>
        </div>
        <div className="hidden md:flex flex-row justify-end font-medium space-x-12 text-black  md:mr-28">
          <a href="#home">
            <p>Home</p>
          </a>

          <a href="#blog">
            <p>Blog</p>
          </a>
          <a href="#portfolio">
            <p>Portfolio</p>
          </a>

          <a href="#contact">
            <p className="bg-green-900 px-4 py-1 rounded-sm text-white">
              Get started
            </p>
          </a>
        </div>
      </div>
      {/* Drawer Overlay */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity ${
          isDrawerOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleDrawer}
      ></div>
      <div
        className={`fixed left-0 top-0 w-64 h-full z-50 bg-white shadow-lg transform transition-transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold">Menu</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" onClick={toggleDrawer}>
                Home
              </a>
            </li>
            <li>
              <a href="#service" onClick={toggleDrawer}>
                Service
              </a>
            </li>
            <li>
              <a href="#blog" onClick={toggleDrawer}>
                Blog
              </a>
            </li>
            <li>
              <p>Portfolio</p>
            </li>
            <li>
              <a href="#contact" onClick={toggleDrawer}>
                Contact
              </a>
            </li>
          </ul>
          <button
            onClick={toggleDrawer}
            className="mt-4 p-2  text-yellow-300 rounded"
          >
            <IoMdArrowRoundBack />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
