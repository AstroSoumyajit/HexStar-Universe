import React from "react";
import { BsCalendar4Event } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";

const CourseCard = ({ modal_image, date, time }) => {
  return (
    <div className="space-y-2  p-4 min-w-[15rem]">
      <img src={modal_image} className="" />
      <section className="flex justify-start items-center space-x-4">
        <BsCalendar4Event />
        <h1>
          <b>Starting Date: </b> {date}
        </h1>
      </section>
      <section className="flex justify-start items-center space-x-4">
        <AiOutlineClockCircle />
        <h1>
          <b>Time: </b> {time}
        </h1>
      </section>
      <button className="bg-[#013EF3] text-white font-sweet_sans_pro px-2 py-1.5 w-full rounded-md">
        Join the Meet
      </button>
    </div>
  );
};

export default CourseCard;
