import React from "react";

function IconSocialMedia({ Fb, Tg, Tw, Ig, Li, Ws, className }) {
  return (
    <div className={` flex ${className} `}>
      <>
        {Fb && (
          <div className="bg-[#00ADB5] rounded-full p-1 flex items-center justify-center">
            <Fb className="  text-white" /> {/* Set icon size and color */}
          </div>
        )}
        {/* Add other icons similarly if needed */}
        {Tg && (
          <div className="bg-[#00ADB5] rounded-full p-1 flex items-center justify-center">
            <Tg className="  text-white" /> {/* Set icon size and color */}
          </div>
        )}
        {Tw && (
          <div className="bg-[#00ADB5] rounded-full p-1 flex items-center justify-center">
            <Tw className="  text-white" /> {/* Set icon size and color */}
          </div>
        )}
        {Ig && (
          <div className="bg-[#00ADB5] rounded-full p-1 flex items-center justify-center">
            <Ig className="  text-white" /> {/* Set icon size and color */}
          </div>
        )}
        {Li && (
          <div className="bg-[#00ADB5] rounded-full p-1 flex items-center justify-center">
            <Li className="  text-white" /> {/* Set icon size and color */}
          </div>
        )}
        {Ws && (
          <div className="bg-[#00ADB5] rounded-full p-1 flex items-center justify-center">
            <Ws className="  text-white" /> {/* Set icon size and color */}
          </div>
        )}
      </>
    </div>
  );
}

export default IconSocialMedia;

//
