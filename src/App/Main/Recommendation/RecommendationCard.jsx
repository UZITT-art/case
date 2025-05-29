import React from "react";

import Avator from "../../common/Avator/Avator";
import { CiStar } from "react-icons/ci";
function RecommendationCard({ rate = 5, title, discribtion, img, name, role }) {
  return (
    <>
      <div className="flex flex-col   bg-gradient-radial from-green-800 to-green-400  rounded-lg shadow-lg p-4 space-y-4  ">
        <div className="flex  text-[#C2B067] ">
          {(() => {
            const stars = [];
            for (let i = 0; i < rate; i++) {
              stars.push(<CiStar key={i} />);
            }
            return stars;
          })()}
        </div>

        <div className="text-lg font-normal  text-[#C2B067]  ">{title}</div>
        <div className="text-gray-400 text-xs font-light">{discribtion}</div>
        <div className="flex  space-x-6">
          <div>
            <Avator Avatimg={img} width={80} />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="text-lg font-light  text-gray-300">{name} </div>
            <div className="  text-[#EFBF04] text-sm">{role}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecommendationCard;
