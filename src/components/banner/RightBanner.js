import React from "react";
import { sanket11pic } from "../../assets/index";
//import { sanketprofile } from "../../assets/index";


const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[485px] h-[400px] lgl:w-[500px] lgl:h-[545px] z-10"
         src={sanket11pic}
        // src={sanketprofile}
        alt="sanketpic"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
