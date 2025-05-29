import React from "react";

function ComponentCard({ title, description }) {
  return (
    <div className="lg:flex flex-col items-center justify-center gap-4   md:gap-6  md:px-40 md:py-12 sm:py-6 sm:px-8">
      <p className=" px-12 font-bold text-3xl  sm:flex justify-center  text-[#C2B067]   ">
        {title}
      </p>
      <p className=" text-gray-400 text-sm">{description}</p>
    </div>
  );
}

export default ComponentCard;
