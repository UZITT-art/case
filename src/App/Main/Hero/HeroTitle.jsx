import React from "react";
import Buttons from "../../common/Button/Buttons";
import { FaArrowRight } from "react-icons/fa";

import Hero from "../../../assets/Hero.png";

function HeroTitle() {
  return (
    <div id="home">
      <div className="bg-gradient-to-r from-green-900 to-green-600 h-screen flex items-center justify-center bg-opacity-100">
        <div className="flex flex-col w-full md:w-1/2 gap-6  space-y-4    ">
          <div className=" text-2xl sm:4xl md:text-6xl text-[#EFBF04] font-semibold  sm:px-8  ">
            <p> Designing Tomorrow: Where Passion Fuels Progress.</p>
          </div>

          <p className="xs:w-full text-gray-50  text-xs text-start  sm:px-8 md:px-4  ">
            we are committed to shaping the future through creativity and
            innovation. Our dedicated team transforms bold ideas into impactful
            solutions, blending cutting-edge technology with artistic vision.
            Together, we'll elevate your brand and create a narrative that
            inspires and drives progress, ensuring you stand out in a
            competitive landscape.
          </p>
          <div className="md:px-4  md:py-8 sm:px-8 sm:py-10">
            <Buttons
              text={"Explore Our work"}
              Icon={FaArrowRight}
              className="px-8 py-4  rounded-lg bg-[#EFBF04] "
            />
          </div>
        </div>
        <div className="hidden md:block pt-4 pl-4">
          {/* Adjust the value as needed */}
          <img src={Hero} className="w-90 rounded-lg " alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default HeroTitle;
