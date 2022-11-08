import React from "react";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

const LoginForm = () => {
  const { data: session } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [byear, setByear] = useState("");

  const handleCreateAccount = () => {
    if (
      name === "" ||
      email === "" ||
      password === "" ||
      date === "" ||
      month === "" ||
      byear === ""
    ) {
      return false;
    } else {
      return true;
    }
  };

  const SubmitUserData = () => {
    const userdata = {
      name: name,
      email: email,
      password: password,
      DOB: `${date}/${month}/${year}`,
    };

    // console.log(userdata)
  };

  const ref = useRef(null);
  let year = new Date().getFullYear();
  const range = (min, max) =>
    [...Array(max - min + 1).keys()].map((i) => i + min);

  useEffect(() => {
    const password_input = document.getElementById("password_input");
    showPassword
      ? (password_input.type = "text")
      : (password_input.type = "password");
  }, [showPassword]);
  return (
    <form className="font-gilroy flex flex-col justify-center space-y-4 w-[80%] md:w-[70%] lg:w-[50%] mx-auto text-white select-none">
      <h1 className="text-xl">Sign Up</h1>
      <input
        type="text"
        placeholder="Enter your Name"
        className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white"
        onChange={(e) => setName(e.target.value)}
      />
      {/* <input type="text" placeholder="Enter your Email Address" className="bg-transparent border border-white rounded-xl px-2 py-1.5"/> */}
      <input
        type="text"
        placeholder="Enter your Email"
        className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white"
        onChange={(e) => setEmail(e.target.value)}
      />
      <section className="flex justify-between space-x-4">
        <select
          className="px-1.5 py-1.5 rounded-md bg-transparent border-white border child:bg-black child:text-white text-white scrollbar-thumb-gray-900 scrollbar-thin"
          onChange={(e) => setDate(e.target.value)}
        >
          <option selected disabled>
            D
          </option>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
            return <option>{date}</option>;
          })}
        </select>
        <select
          className="px-1.5 py-1.5 rounded-md bg-transparent border-white border text-white child:bg-black child:text-white scrollbar-thumb-gray-900 scrollbar-thin"
          onChange={(e) => setMonth(e.target.value)}
        >
          <option selected disabled>
            M
          </option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((date) => {
            return <option>{date}</option>;
          })}
        </select>
        <select
          className="px-1.5 py-1.5 rounded-md bg-transparent border-white border child:bg-black child:text-white text-white scrollbar-thumb-gray-900 scrollbar-thin"
          onChange={(e) => setByear(e.target.value)}
        >
          <option selected disabled>
            YY
          </option>
          {range(year - 50, year - 10)
            .reverse()
            .map((date) => {
              return <option>{date}</option>;
            })}
        </select>
      </section>

      {/* need to build */}
      <section className="relative">
        <input
          ref={ref}
          id="password_input"
          type="password"
          className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white w-full pr-8"
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {showPassword ? (
          <AiFillEye
            className="text-[#777777] absolute top-1.5 right-1.5 text-2xl cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        ) : (
          <AiFillEyeInvisible
            className="text-[#777777] absolute top-1.5 right-1.5 text-2xl cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
        {/* <AiFillEye className="text-[#777777] absolute top-1.5 right-1.5 text-2xl cursor-pointer" /> */}
      </section>
      {handleCreateAccount() ? (
        <span
          className="bg-[#777777] py-1.5 rounded-xl text-white hover:bg-[#424242] text-center"
          onClick={SubmitUserData}
        >
          Create Account
        </span>
      ) : (
        <span className="bg-[#777777] py-1.5 rounded-xl text-white  text-center opacity-50 cursor-not-allowed">
          Create Account
        </span>
      )}
      {/* <span
        className="bg-[#777777] py-1.5 rounded-xl text-white  text-center"
        onClick={SubmitUserData}
      >
        Create Account
      </span> */}

      <div className="relative flex py-2 items-center">
        <div className="flex-grow border-t border-[#ffffff]" />
        <span className="flex-shrink mx-4">
          <button className="text-white">Or</button>
        </span>
        <div className="flex-grow border-t border-[#ffffff]" />
      </div>
      <button
        className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white w-full flex justify-center items-center"
        onClick={() => signIn()}
      >
        <FcGoogle className="text-2xl mr-4" />
        Sign up With Google
      </button>
      <button className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white w-full flex justify-center items-center">
        <BsGithub className="text-2xl mr-4" />
        Sign up With Github
      </button>
      <h1 className="text-center">
        Already have an account ?{" "}
        <b>
          <Link href="#">Log in</Link>
        </b>
      </h1>
    </form>
  );
};

export default LoginForm;
