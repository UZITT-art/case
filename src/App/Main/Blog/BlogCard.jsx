import React from "react";

function BlogCard({ img, title, discription }) {
  return (
    <div className=" bg-gray-50 rounded-lg  shadow-lg">
      <img
        src={img}
        alt=""
        className=" h-72 w-full  object-cover rounded-t-lg"
      />
      <div className="px-6 py-5 space-y-2">
        <div className="font-medium text-lg text-[#EFBF04]  text-center ">
          {title}
        </div>
        <div className="text-xs   text-gray-400 font-light pb-2 text-center ">
          {discription}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
