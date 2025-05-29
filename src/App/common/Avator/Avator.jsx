import React from "react";

function Avator({ Avatimg, width }) {
  return (
    <>
      <img
        src={Avatimg}
        className=" object-cover rounded-full"
        style={{ width: width, height: width }}
        alt=""
      />
    </>
  );
}

export default Avator;
