import CitizenScience from "../components/CitizenScience";
import Collaborators from "../components/Collaborators";
import Events from "../components/Events";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MasterClass from "../components/MasterClass";
import Navbar from "../components/Navbar";
import SideNav from "../components/SideNav";
import Webinars from "../components/Webinars";
import { webinarData } from "../dummydb";
import { webinarData2 } from "../dummydb2";
import { useRouter } from "next/router";
import Head from "next/head";
import BoostButton from "../components/BoostButton";
import Link from "next/link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import Lottie from "react-lottie";
import * as animation from "./animation.json";

export default function Home() {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose = () => setOpen(false);
  const handleClose2 = () => setOpen2(false);
  const [showanimation, setShowanimation] = useState(true);
  const route = useRouter().pathname;
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
        {/* <Link href="https://rzp.io/l/DeepSkyImgProcessing">
          <img src="/scholarship.png" className="cursor-pointer mx-auto" />
        </Link> */}
        <Webinars
          title="Webinars"
        />
        <MasterClass />
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
            <img src="/astroimage.png" />
            <div className="absolute sm:top-3/4 top-[70%] left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative w-fit">
                <button
                  className="bg-[#FD1C50] text-black font-sweet_sans_pro font-bold italic md:text-lg text-[11px] px-3 py-2 rounded-full relative z-20 "
                  onClick={handleOpen2}
                >
                  REGISTER NOW
                </button>
                <div className="bg-[#FD1C50] absolute inset-0 blur-md rounded-full  animate-pulse" />
              </div>
            </div>
            <div
              className="absolute md:top-8 top-2 right-8 md:right-16"
              onClick={handleClose}
            >
              <AiOutlineCloseCircle className="text-white md:text-3xl text-2xl" />
            </div>
          </div>
        </div>
      </Modal>
      <Modal
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
      </Modal>
    </div>
  );
}
