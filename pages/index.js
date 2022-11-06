import CitizenScience from "../components/CitizenScience";
import Collaborators from "../components/Collaborators";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MasterClass from "../components/MasterClass";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Webinars from "../components/Webinars";
import { useRouter } from "next/router";
import Head from "next/head";
import BoostButton from "../components/BoostButton";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import {
  AiOutlineCloseCircle,
  AiFillEye,
  AiFillEyeInvisible,
} from "react-icons/ai";
import Lottie from "react-lottie";
import * as animation from "./animation.json";
import WSW from "../components/WSW";
import Mentor from "../components/Mentor";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(true);
  const handleOpen2 = () => setOpen2(true);
  const handleOpen3 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const handleClose3 = () => setOpen3(false);
  const [showanimation, setShowanimation] = useState(true);
  const route = useRouter().pathname;
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  let year = new Date().getFullYear();
  const range = (min, max) =>
    [...Array(max - min + 1).keys()].map((i) => i + min);
  // console.log (route);

  useEffect(() => {
    console.log("Function is called");
    setShowanimation(true);
    setTimeout(() => {
      setShowanimation(false);
    }, 1500);
  }, []);

  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = () => {
    event.preventDefault();
  };
  return (
    <div className="bg-[#000] overflow-x-auto ">
      <div
        className={`absolute h-screen w-[80vw] z-50 overflow-y-auto xl:ml-36 lg:ml-24 md:ml-16 ml-6 ${
          showanimation === false && "hidden"
        }`}
      >
        {/* <Lottie
          options={defaultOptions}
          // height={1000}
          // width={1000}
          isStopped={showanimation}
          isPaused={showanimation}
          onClick={() => conosle.log ('Disabled')}
        /> */}
      </div>
      <Head>
        <title>HexStar Universe</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <SideNav path={route} />
      <Navbar path={route} />
      <div className="md:ml-16 md:px-12 px-4">
        <Hero />
        <WSW />
        {/* <Link href="https://rzp.io/l/DeepSkyImgProcessing">
          <img src="/scholarship.png" className="cursor-pointer mx-auto" />
        </Link> */}
        <Webinars title="Webinars" />
        <MasterClass />
        <Mentor />
        <Events />
        <CitizenScience />
        <Collaborators />
        <Footer />
        <BoostButton />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="relative"
      >
        <div className="focus:outline-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* <div className="rounded-lg bg-gradient-to-tl from-[#14003a] to-[#320090] relative">
            <div className="px-4 py-4 ">
              <div className="flex justify-between">
                <h1 className="bg-[#00C2FF] font-bold rounded-md px-4 py-2 -rotate-3 font-Europa_Gro max-w-fit text-2xl">
                  First Time in INDIA
                </h1>
                <AiOutlineCloseCircle
                  className="text-4xl text-white cursor-pointer"
                  onClick={handleClose}
                />
              </div>
              <div className="text-white leading-tight">
                <h1 className="font-sweet_sans_pro font-bold italic text-2xl">
                  LEARN ROCKETRY FROM ISRO ROCKET SCIENTIST
                </h1>
                <h1 className="sm:text-xl font-light">
                  Three days MasterClass on Rocketry by
                </h1>
                <h1 className="sm:text-xl font-light w-3/4">
                  Prof.R.R.Elavgovan
                  <span className="sm:text-base text-sm font-light">
                    (Former ISRO Scientist & Core team member of GSLV MK-1)
                  </span>
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <FaCalendarAlt className="text-3xl text-white" />
                <h1 className="text-xl font-bold text-white ">20-22 AUGUST</h1>
              </div>
              <h1 className="text-2xl italic font-sweet_sans_pro font-bold text-white leading-tight">
                LIMITED <br /> SLOTS!!!
              </h1>
              <div className="relative w-fit">
                <button
                  className="bg-[#00C2FF] text-black font-sweet_sans_pro font-bold italic md:text-lg text-[11px] px-3 py-2 rounded-full relative z-20 "
                  onClick={handleOpen2}
                >
                  REGISTER NOW
                </button>
                <div className="bg-[#00C2FF] absolute inset-0 blur-md rounded-full  animate-pulse" />
              </div>
              <div className="relative max-w-fit">
                <h1 className="font-sweet_sans_pro italic font-bold md:text-xl text-base text-white ">
                  Only at 250 INR
                </h1>
                <div className="absolute bg-white inset-0 blur-3xl" />
              </div>
            </div>
            <img
              src="/rocket.png"
              className="absolute bottom-0 right-0 w-[50%] rounded-br-lg"
            />
            <div className="absolute bg-[#320090] inset-0 blur-xl rounded-md -z-10" />
          </div> */}
          <div className="flex flex-col justify-center space-y-6 sm:w-[500px] w-[80vw] relative">
            <img src="/rocketdesignChallange.png" />
            <div className="absolute top-3/4  left-1/4 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-fit">
                <Link href="https://pages.razorpay.com/VRDC2K22">
                  <button className="bg-[#00D1FF] text-black font-sweet_sans_pro font-bold italic sm:text-base text-xs px-3 py-2 rounded-full relative z-20 ">
                    REGISTER NOW
                  </button>
                </Link>
                <div className="bg-[#00D1FF] absolute inset-0 blur-md rounded-full animate-pulse" />
              </div>
            </div>
            <div
              className="absolute top-0 right-6 cursor-pointer"
              onClick={handleClose}
            >
              <AiOutlineCloseCircle className="text-white md:text-3xl text-2xl" />
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={open3}
        onClose={handleClose3}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute outline-0 top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-[70vw] h-[60vh] grid-cols-2 grid justify-items-center place-items-center ">
            <div className="backdrop-blur-md bg-[#171717]/30 bg-white h-full w-full rounded-t-l-xl rounded-b-l-xl rounded-tl-3xl rounded-bl-3xl flex justify-center">
              <form className="font-gilroy flex flex-col justify-center space-y-4 w-1/2">
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white"
                />
                {/* <input type="text" placeholder="Enter your Email Address" className="bg-transparent border border-white rounded-xl px-2 py-1.5"/> */}
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white"
                />
                <section className="flex justify-between space-x-4">
                  <select className="px-1.5 py-1.5 rounded-md bg-transparent border-white border child:bg-black child:text-white text-white scrollbar-thumb-gray-900 scrollbar-thin">
                    <option selected disabled>
                      D
                    </option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map((date) => {
                      return <option>{date}</option>;
                    })}
                  </select>
                  <select className="px-1.5 py-1.5 rounded-md bg-transparent border-white border text-white child:bg-black child:text-white scrollbar-thumb-gray-900 scrollbar-thin">
                    <option selected disabled>
                      M
                    </option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map((date) => {
                      return <option>{date}</option>;
                    })}
                  </select>
                  <select className="px-1.5 py-1.5 rounded-md bg-transparent border-white border child:bg-black child:text-white text-white scrollbar-thumb-gray-900 scrollbar-thin">
                    <option selected disabled>
                      YY
                    </option>
                    {range(year - 50, year)
                      .reverse()
                      .map((date) => {
                        return <option>{date}</option>;
                      })}
                  </select>
                </section>

                {/* need to build */}
                <section className="relative">
                  <input
                    type="password"
                    className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white w-full"
                    placeholder="Enter your password"
                  />
                  <AiFillEye className="text-[#777777] absolute top-1.5 right-1.5 text-2xl cursor-pointer" />
                </section>

                <button className="bg-[#777777] py-1.5 rounded-xl text-white hover:bg-[#424242]">
                  Create Account
                </button>
                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-[#ffffff]" />
                  <span className="flex-shrink mx-4">
                    <Link href=" https://www.zooniverse.org/">
                      <button className="text-white">Or</button>
                    </Link>
                  </span>
                  <div className="flex-grow border-t border-[#ffffff]" />
                </div>
                <button className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white w-full flex justify-center items-center">
                  <FcGoogle className="text-2xl mr-4" />
                  Log in With Google
                </button>
                <button className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white w-full flex justify-center items-center">
                  <BsGithub className="text-2xl mr-4" />
                  Log in With Github
                </button>
              </form>
            </div>
            <div className="bg-[#171717] h-full font-gilroy flex flex-col justify-center p-8 rounded-tr-3xl rounded-br-3xl">
              <section className="flex flex-col text-white space-y-12 ">
                <div className="space-y-6 ">
                  <h1 className="text-5xl">
                    Welcome to
                    <br /> our Community
                  </h1>
                  <h1>
                    Make your career on Space science and technology by the
                    mentorship of top engineer and scientists of the world.
                  </h1>
                </div>
                <img src="/persons.png" className="w-fit" />
              </section>
            </div>
          </div>
        </div>
      </Modal>
      {/* <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="focus:outline-0 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black md:p-8 p-4 rounded-xl">
          <div className="flex flex-col justify-center md:space-y-8 space-y-4 child:px-4 child:py-3 child:rounded-md child:bg-[#D004A3] md:child:text-2xl child:text-lg child:font-sweet_sans_pro child:text-white child:italic child:text-center child:font-bold child:cursor-pointer">
            <Link href="https://rzp.io/l/DeepSkyImgProcessing">
              <h1>INDIA</h1>
            </Link>
            <Link href="https://rzp.io/l/DeepskyImgInternational">
              <h1>OUTSIDE INDIA</h1>
            </Link>
          </div>
        </div>
      </Modal> */}
    </div>
  );
}
