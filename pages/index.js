import React from "react";
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
import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../database/firebase";
import { useLogin } from "../context/LoginContext";
import { useVerifyModal } from "../context/VerifyCertificateModal";
import { Dialog, Slide } from "@material-ui/core";
import { MdVerified } from "react-icons/md";

export default function Home({ providers }) {
  const [LoginModal, setLoginModal] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
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
  const [UserArr, setUserArr] = useState([]);
  const { openVerify, setOpenVerify } = useVerifyModal();
  const [certificateNumber, setCertificateNumber] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  const [showanimation, setShowanimation] = useState(true);

  const route = useRouter().pathname;
  const router = useRouter();

  const ref = useRef(null);

  let year = new Date().getFullYear();
  const range = (min, max) =>
    [...Array(max - min + 1).keys()].map((i) => i + min);

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  //check for if sign up Formis all good ?
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

  //Submit users data to firebase and add inside Global Object
  const SubmitUserData = async () => {
    const id = Date.now();
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
    window.sessionStorage.setItem("user_id", id);
  };

  //ckeck if Login Form is good to go?
  const checkLoginForm = () => {
    if (email === "" || password === "") {
      return false;
    } else {
      return true;
    }
  };

  //Check if users exists and can he Login?
  //then add userid inside session storage-> next time when users eneters he gets login directly
  const Login = async () => {
    const q = query(collection(db, "users"), where("email", "==", `${email}`));

    const querySnapshot = await getDocs(q);

    querySnapshot.forEach((doc) => {
      let temp = UserArr;
      temp.push(doc.data());
      setUserArr(temp);
    });

    if (UserArr.length === 0) {
      alert("User not found");
    } else {
      let authUser = UserArr.find((user) => user.password === password);

      if (authUser) {
        setUserData(authUser);
        window.sessionStorage.setItem("user_id", authUser.id);
      } else {
        alert("Password Invalid");
        return;
      }

      window.location.reload();
    }

    setModalChnage();
    setUserArr([]);
  };

  //whenever user enters the page or Refresh -> the user_id found from session and query inside firebase to retrieve data
  const getUserData = async () => {
    const userId =
      window.sessionStorage.getItem("user_id") ||
      session?.user.id ||
      session?.user.uid;

    const userRef = doc(db, "users", userId);
    const userDocSnap = await getDoc(userRef);
    if (userDocSnap.exists()) {
      setUserData({ ...userDocSnap.data() });
    }
  };

  React.useEffect(() => {
    if (
      window.sessionStorage.getItem("user_id") ||
      session?.user.id ||
      session?.user.uid
    ) {
      getUserData();
    }
  }, []);

  //Check Certificate NUmber
  const checkCertificate = () => {
    if (certificateNumber.length !== 11) {
      return false;
    } else {
      if (
        certificateNumber.substring(0, 9) === "SMC202211" &&
        parseInt(certificateNumber.substring(9, 11)) >= 1 &&
        parseInt(certificateNumber.substring(9, 11)) <= 50
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const addVerificationDatatoDatabase = async () => {
    if (checkCertificate()) {
      const userRef = doc(
        db,
        "users",
        `${
          session?.user.uid ||
          session?.user.id ||
          window.sessionStorage.getItem("user_id")
        }`
      );
      await updateDoc(userRef, {
        certificateVerified: true,
        certificateId: certificateNumber,
      });
      setOpenVerify(false);
      setOpenDialog(true);
    } else {
      alert("Certificate Not Verified");
    }
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
      {/* <div
        className={` h-screen w-[80vw] z-50 overflow-y-auto xl:ml-36 lg:ml-24 md:ml-16 ml-6 ${
          showanimation === false && "hidden"
        }`}
      >
        <Lottie
          options={defaultOptions}
          // height={1000}
          // width={1000}
          isStopped={showanimation}
          isPaused={showanimation}
          onClick={() => conosle.log ('Disabled')}
        />
      </div> */}
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
          <div className="md:w-[60vw] w-[80vw] md:grid-cols-2 h-[90vh] md:h-fit grid-cols-1 grid justify-items-center place-items-center backdrop-blur-md bg-[#171717]/30 relative ">
            <img
              src="/Arrow.png"
              className="absolute z-10 bottom-32 hidden md:block w-[10rem]"
            />
            <div
              className={`rounded-t-l-xl rounded-b-l-xl rounded-tl-3xl rounded-bl-3xl  ${
                showWelcome && "hidden md:block"
              }`}
            >
              <form className="font-gilroy flex flex-col justify-center space-y-4 w-full p-8   mx-auto text-white select-none ">
                <img
                  src="/backarrow.png"
                  className="w-6 absolute top-4 left-6 cursor-pointer md:hidden"
                  onClick={() => setShowWelcome(true)}
                />
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
                  checkLoginForm() ? (
                    <span
                      className="bg-[#777777] py-1.5 rounded-xl text-white hover:bg-[#424242] text-center"
                      onClick={Login}
                    >
                      Log in
                    </span>
                  ) : (
                    <span className="bg-[#777777] py-1.5 rounded-xl text-white  text-center opacity-50 cursor-not-allowed">
                      Log in
                    </span>
                  )
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
                    Don&apos;t have an account?
                    <br/>
                    <b>
                      <span onClick={() => setLoginModal(false)}> Sign Up</span>
                    </b>
                  </h1>
                ) : (
                  <h1 className="text-center">
                    Already have an account ?
                    <br/>
                    <b>
                      <span onClick={() => setLoginModal(true)}> Log in</span>
                    </b>
                  </h1>
                )}
              </form>
            </div>

            <div
              className={`md:bg-[#171717] h-full font-gilroy  p-8 rounded-tr-3xl rounded-br-3xl relative ${
                showWelcome ? "block" : "hidden"
              }`}
            >
              <img src="/ellipse.png" className="absolute top-0" />
              <img src="/planet.png" className="absolute bottom-1 right-1" />
              <div className="flex flex-col justify-center xl:pt-28 lg:pt-20 md:pt-16 pt-8">
                <section className="flex flex-col text-white space-y-12 z-50">
                  <div className="space-y-6 ">
                    {LoginModal ? (
                      <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl">Welcome Back !</h1>
                    ) : (
                      <h1 className="xl:text-5xl lg:text-4xl md:text-3xl text-2xl">
                        Welcome to
                        <br /> our Community
                      </h1>
                    )}
                    <h1>
                      Make your career on Space science and technology by the
                      mentorship of top engineer and scientists of the world.
                    </h1>
                  </div>
                  {!LoginModal && (
                    <section className="flex justify-start items-center space-x-4">
                      <img src="/persons.png" className="w-fit" />
                      <h1 className="hidden md:block">5K+ space enthusiast</h1>
                    </section>
                  )}
                </section>
                <div className="border border-white w-fit text-xl mx-auto rounded-lg h-10 flex justify-between items-center mt-8 md:hidden z-10 divide-x-2">
                  <span
                    className="  text-white rounded-tl-lg rounded-bl-lg py-1 text-center  px-6 text-base md:text-lg  cursor-pointer hover:text-black hover:bg-white hover:rounded-lg"
                    onClick={() => {
                      setShowWelcome(false);
                      setLoginModal(false);
                    }}
                  >
                    Sign Up
                  </span>
                  <span
                    className=" text-white rounded-tl-lg rounded-bl-lg py-1 text-center  px-6 text-base md:text-lg  cursor-pointer hover:text-black hover:bg-white hover:rounded-lg"
                    onClick={() => {
                      setShowWelcome(false);
                      setLoginModal(true);
                    }}
                  >
                    Log In
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={openVerify}
        onClose={() => setOpenVerify(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="absolute outline-0 top-1/2  left-1/2   -translate-x-1/2 -translate-y-1/2 font-gilroy text-white">
          <div className="backdrop-blur-md bg-[#171717]/30 md:w-[25vw] w-[80vw] h-fit lg:p-8 p-4 rounded-xl space-y-4">
            <h1 className="text-xl">Verify Your Certificate</h1>
            <input
              onChange={(e) => setCertificateNumber(e.target.value)}
              className="focus:outline-none rounded-full px-4 py-2 border border-white bg-transparent w-full"
              type="text"
              placeholder="Enter Your Certificate Verification Number"
            />
            <section
              className="bg-[#0064AC] text-white rounded-full px-4 py-2 text-xl w-fit cursor-pointer"
              onClick={addVerificationDatatoDatabase}
            >
              Verify
            </section>
            <h1 className="text-sm text-[#6C6C6C] pt-8">
              *Verification number should same as the below of your certificate
            </h1>
          </div>
        </div>
      </Modal>
      <Modal
        open={openDialog}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setOpenDialog(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="absolute outline-0 top-1/2  left-1/2   -translate-x-1/2 -translate-y-1/2">
          <div className="backdrop-blur-md bg-[#0000]/30 md:w-[25vw] w-[80vw] h-fit text-white space-y-6 p-4 flex flex-col justify-center items-center rounded-xl">
            <MdVerified className="text-4xl text-[#00FF19]" />
            <h1 className="text-xl">
              Your Certificate is successfully{" "}
              <span className="text-[#00FF19]">Verified</span>
            </h1>
            <h1>Certificate ID : {certificateNumber}</h1>
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
