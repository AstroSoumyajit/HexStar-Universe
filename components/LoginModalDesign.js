import React from "react";
import { useContext } from "react";
import { useSigninMobile } from "../context/SignUpModalMobileContext";
import { useLogin } from "../context/LoginContext";

const LoginModalDesign = ({ Login , setLoginModal}) => {
  const {signInMobile, setSignInModalMobile} =  useSigninMobile()
  return  (
    <div className={`md:bg-[#171717] h-full font-gilroy  p-8 rounded-tr-3xl rounded-br-3xl relative md:block `}>
      <img src="/ellipse.png" className="absolute top-0" />
      <img src="/planet.png" className="absolute bottom-1 right-1" />
      <div className="flex flex-col justify-center pt-28">
        <section className="flex flex-col text-white space-y-12 z-50">
          <div className="space-y-6 ">
            {Login ? (
              <h1 className="text-5xl">Welcome to Back !</h1>
            ) : (
              <h1 className="text-5xl">
                Welcome to
                <br /> our Community
              </h1>
            )}
            <h1>
              Make your career on Space science and technology by the mentorship
              of top engineer and scientists of the world.
            </h1>
          </div>
          {!Login && (
            <section className="flex justify-start items-center space-x-4">
              <img src="/persons.png" className="w-fit" />
              <h1>5K+ space enthusiast</h1>
            </section>
          )}
        </section>
        <div className="border border-white w-fit text-xl mx-auto rounded-lg h-10 flex justify-between items-center mt-8 md:hidden z-10">
          <span className="text-black border bg-white rounded-lg  py-1 text-center  px-6  cursor-pointer" onClick={()=> setLoginModal(false)}>Sign Up</span>
          <span className="text-white rounded-lg py-1 text-center  px-6 cursor-pointer z-10 hover:bg-[#4949496b]" onClick={()=> setLoginModal(true)}>Log In</span>
        </div>
      </div>
    </div>
  );
};

export default LoginModalDesign;
