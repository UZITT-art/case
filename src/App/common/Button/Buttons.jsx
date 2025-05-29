import React from "react";

function Buttons({ text, Icon, className }) {
  return (
    <div className=" flex flex-row items-center  ">
      <button
        type="button"
        className={`flex  flex-row  justify-center   gap-2 ${className}`}
      >
        {text} {Icon && <Icon className="h-5 w-5" />}
      </button>
    </div>
  );
}

export default Buttons;
