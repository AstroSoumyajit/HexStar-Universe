import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

const PrivacyandPolicy = () => {
  return (
    <div className="bg-black min-h-screen pb-8">
      <div className="bg-white h-[20vh] flex justify-start items-end rounded-br-[5rem]">
        <div className="px-4 md:px-8 lg:px-16 xl:px-32 py-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-gilroy font-bold">
            About Us
          </h1>
        </div>
      </div>
      <div className="text-white px-4 md:px-8 lg:px-16 xl:px-32 py-10 md:space-y-10 space-y-4">
        <h1>
          We are a Space research and development based Ed-Tech company
          providing space education in India as well as all around the world.
          Our vision is to make space accessible and affordable for all. We
          offer free live sessions on different space science related topics. We
          organize Masterclass sessions on space science related topics at a
          very affordable price with world&apos;s top 1% space science experts.
          Also we work on different hands-on space science projects to develop
          practical knowledge of students.
        </h1>
      </div>
      <div className="my-4">
        <div className="p-2 rounded-full bg-white w-fit mx-auto cursor-pointer">
          <Link href="/#footer">
            <MdOutlineArrowBack className="text-4xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PrivacyandPolicy;
