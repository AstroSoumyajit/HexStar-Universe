import React from "react";

const LoginModalDesign = () => {
  return (
    <div className="bg-[#171717] h-full font-gilroy flex flex-col justify-center p-8 rounded-tr-3xl rounded-br-3xl relative">
      <img src="/ellipse.png" className="absolute top-0" />
      <img src="/planet.png" className="absolute bottom-1 right-1" />
      <section className="flex flex-col text-white space-y-12 z-50">
        <div className="space-y-6 ">
          <h1 className="text-5xl">
            Welcome to
            <br /> our Community
          </h1>
          <h1>
            Make your career on Space science and technology by the mentorship
            of top engineer and scientists of the world.
          </h1>
        </div>
        <section className="flex justify-start items-center space-x-4">
          <img src="/persons.png" className="w-fit" />
          <h1>5K+ space enthusiast</h1>
        </section>
      </section>
    </div>
  );
};

export default LoginModalDesign;
