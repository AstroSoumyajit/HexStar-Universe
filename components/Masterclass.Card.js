import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { HiStatusOnline } from "react-icons/hi";

const MasterclassCard = () => {
  return (
    <div className="bg-[#161616] p-2 rounded-md space-y-6 font-gilroy">
      <div className="relative">
        <img src="/Images/masterclassNew/image1.png" />
        <h1 className="font-bold text-xl text-white absolute bottom-2 left-2">
          Satellite Masterclass
        </h1>
        <span className="bg-purple-500 text-white font-semibold flex justify-center rounded-full px-2 py-1 items-center text-xs w-fit absolute top-2 right-2">
          <HiStatusOnline size={15} className="mr-2" /> Live Class
        </span>
      </div>
      <div className="p-2 space-y-4 text-white">
        <div className="flex justify-start space-x-3 items-center"><AiOutlineClockCircle size={25}/><h1>3 Days certified masterclasses</h1></div>
        <div className="flex justify-start space-x-3 items-center"><img src='/Images/masterclassNew/tick.svg' className="w-[25px]"/><h1>No Pre-Requisites</h1></div>
        <div className="flex justify-start space-x-3 items-center"><img src='/Images/masterclassNew/group.svg' className="w-[25px]"/><h1>Expert guidance</h1></div>
      </div>
      <div className="text-center">
      <button className="font-bold text-xl bg-gradient-to-r from-[#3300FF] to-[#DB00FF] w-11/12 text-white py-2 rounded-md ">Apply Now</button>
      </div>
    </div>
  );
};

export default MasterclassCard;
