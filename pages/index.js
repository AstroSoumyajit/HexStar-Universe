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
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import Lottie from "react-lottie";
import * as animation from "./animation.json";
import WSW from "../components/WSW";
import Mentor from "../components/Mentor";
import { getProviders, signIn, useSession } from "next-auth/react";
import { ModalUpdateContext, useOpen } from "../context/LoginModalContext";
import { useContext } from "react";
import LoginModalDesign from "../components/LoginModalDesign";
import { useRef } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../database/firebase";
import { useLogin } from "../context/LoginContext";

export default function Home({ providers }) {
  const [LoginModal, setLoginModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const modalState = useOpen();
  const { userData, setUserData } = useLogin();
  const setModalChnage = useContext(ModalUpdateContext);
  const { data: session } = useSession();
  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [byear, setByear] = useState("");

  const [showanimation, setShowanimation] = useState(true);
  const route = useRouter().pathname;
  const router = useRouter();

  const ref = useRef(null);

  useEffect(() => {
    if (window.sessionStorage.getItem("modal_shown")) {
      console.log("found");
    } else {
      setInterval(() => {
        sessionStorage.setItem("modal_shown", true);
        conosle.log("called");
        setModalChnage();
      }, 5000);
    }
  }, [router.isReady]);

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

  let year = new Date().getFullYear();
  const range = (min, max) =>
    [...Array(max - min + 1).keys()].map((i) => i + min);

  // useEffect(() => {
  //   console.log("Function is called");
  //   setShowanimation(true);
  //   setTimeout(() => {
  //     setShowanimation(false);
  //   }, 1500);
  // }, []);

  const SubmitUserData = async () => {
    const id = name.substr(0, indexof(" ")) + Date.now();
    const docRef = await setDoc(doc(db, "users", `${id}`), {
      id: id,
      name: name,
      email: email,
      DOB: `${date}/${month}/${year}`,
      password: password,
    });
    setUserData({
      id: id,
      name: name,
      email: email,
      DOB: `${date}/${month}/${year}`,
    });

    setModalChnage();
  };

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
        open={modalState}
        onClose={setModalChnage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute outline-0 top-1/2  left-1/2  -translate-x-1/2 -translate-y-1/2 font-gilroy">
          <div className="md:w-[60vw] w-[80vw] h-[65vh] md:grid-cols-2 grid-cols-1 grid justify-items-center place-items-center backdrop-blur-md bg-[#171717]/30 relative">
            <img
              src="/Arrow.png"
              className="absolute z-10 bottom-32 hidden lg:block w-[10rem]"
            />
            <div className="rounded-t-l-xl rounded-b-l-xl rounded-tl-3xl rounded-bl-3xl  w-full">
              <form className="font-gilroy flex flex-col justify-center space-y-4 w-[80%] md:w-[70%] lg:w-[50%] mx-auto text-white select-none">
                {LoginModal ? (
                  <h1 className="text-xl">Log In</h1>
                ) : (
                  <h1 className="text-xl">Sign Up</h1>
                )}
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className={`bg-transparent border border-white rounded-xl px-2 py-1.5 text-white ${
                    LoginModal && "hidden"
                  }`}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* <input type="text" placeholder="Enter your Email Address" className="bg-transparent border border-white rounded-xl px-2 py-1.5"/> */}
                <input
                  type="text"
                  placeholder="Enter your Email"
                  className="bg-transparent border border-white rounded-xl px-2 py-1.5 text-white"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <section
                  className={`flex justify-between space-x-4 ${
                    LoginModal && "hidden"
                  }`}
                >
                  <select
                    className="px-1.5 py-1.5 rounded-md bg-transparent border-white border child:bg-black child:text-white text-white scrollbar-thumb-gray-900 scrollbar-thin"
                    onChange={(e) => setDate(e.target.value)}
                  >
                    <option selected disabled>
                      D
                    </option>
                    {Array.from({ length: 31 }, (_, i) => i + 1).map(
                      (date, i) => {
                        return <option key={i}>{date}</option>;
                      }
                    )}
                  </select>
                  <select
                    className="px-1.5 py-1.5 rounded-md bg-transparent border-white border text-white child:bg-black child:text-white scrollbar-thumb-gray-900 scrollbar-thin"
                    onChange={(e) => setMonth(e.target.value)}
                  >
                    <option selected disabled>
                      M
                    </option>
                    {Array.from({ length: 12 }, (_, i) => i + 1).map(
                      (date, i) => {
                        return <option key={i}>{date}</option>;
                      }
                    )}
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
                      .map((date, i) => {
                        return <option key={i}>{date}</option>;
                      })}
                  </select>
                </section>
                <section className="relative">
                  <input
                    // ref={ref}
                    id="password_input"
                    type={showPassword ? "text" : "password"}
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
                {LoginModal ? (
                  <span
                    className="bg-[#777777] py-1.5 rounded-xl text-white hover:bg-[#424242] text-center"
                    onClick={SubmitUserData}
                  >
                    Log in
                  </span>
                ) : handleCreateAccount() ? (
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

                <div className="relative flex py-2 items-center">
                  <div className="flex-grow border-t border-[#ffffff]" />
                  <span className="flex-shrink mx-4">
                    <button className="text-white">Or</button>
                  </span>
                  <div className="flex-grow border-t border-[#ffffff]" />
                </div>
                <span
                  className="cursor-pointer bg-transparent border border-white rounded-xl px-2 py-1.5 text-white w-full flex justify-center items-center"
                  onClick={() => {
                    signIn("google", { callbackUrl: "/usercheck" });
                  }}
                >
                  <FcGoogle className="text-2xl mr-4" />
                  Sign up With Google
                </span>
                <span
                  className="cursor-pointer bg-transparent border border-white rounded-xl px-2 py-1.5 text-white w-full flex justify-center items-center"
                  onClick={() => {
                    signIn("github", { callbackUrl: "/usercheck" });
                  }}
                >
                  <BsGithub className="text-2xl mr-4" />
                  Sign up With Github
                </span>
                {LoginModal ? (
                  <h1 className="text-center">
                    Don't have an account?
                    <b>
                      <span onClick={() => setLoginModal(false)}> Sign Up</span>
                    </b>
                  </h1>
                ) : (
                  <h1 className="text-center">
                    Already have an account ?
                    <b>
                      <span onClick={() => setLoginModal(true)}> Log in</span>
                    </b>
                  </h1>
                )}
              </form>
            </div>

            <LoginModalDesign Login={LoginModal} />
          </div>
        </div>
      </Modal>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}
