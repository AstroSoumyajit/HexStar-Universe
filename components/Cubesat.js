import React from "react";

const Cubesat = () => {
  return (
    <div className="justify-between grid md:grid-cols-3 grid-cols-1 text-white font-gilroy my-8 md:my-16 lg:my-20 xl:my-28 gap-8 md:gap-12 lg:gap-20 xl:gap-28">
      <img src="/cubesat/project.png" className="md:mx-0 mx-auto"/>
      <div className="flex flex-col justify-start md:items-end space-y-6 md:col-span-2" >
        <h1 className="lg:text-6xl md:text-4xl text-2xl md:text-right font-bold">Cubesat Kit</h1>
        <h1 className="text-base md:text-lg md:text-right">
          This Cubesat kit for students is a great way to introduce young
          learners to the exciting world of space technology and engineering.
          These kits typically include all the components and materials needed
          to build a functioning Cubesat, as well as detailed instructions and
          educational resources to help students understand the concepts behind
          the design and operation of the satellite.
        </h1>
        <div className="flex justify-start space-x-8 ">
          <button className="bg-[#1400FF] px-4 py-2 rounded-full text-white font-semibold">Buy Now</button>
          <button className="bg-[#7000FF] px-4 py-2 rounded-full text-white font-semibold">Want to Customize ?</button>
        </div>
      </div>
    </div>
  );
};

export default Cubesat;
