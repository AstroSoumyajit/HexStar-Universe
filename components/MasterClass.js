import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css/pagination';
// import 'swiper/css'
// import 'swiper/css/navigation'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useState } from "react";
import { Modal } from "@material-ui/core";
import { FaChalkboardTeacher } from "react-icons/fa";
import { MdOutlineKeyboardVoice } from "react-icons/md";
import { BsCalendar4 } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { SiRazorpay } from "react-icons/si";
import { useEffect } from "react";
import axios from "axios";

import {
  addDoc,
  arrayUnion,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../database/firebase";
import { async } from "@firebase/util";
import { useSession } from "next-auth/react";
import { useLogin } from "../context/LoginContext";
import crypto from "crypto";
import { useCallback } from "react";
import MasterclassCard from "./Masterclass.Card";

const MasterClass = () => {
  const { userData, setUserData } = useLogin();
  const [mySwiper, setMySwiper] = useState(null);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [clickedMasterclass, setClickedMasterclass] = useState(-1);
  const [payment, setPayment] = useState(false);
  const [MasterClassData, setMasterclassData] = useState([]);
  const { data: session } = useSession();
  const [waiting, setWaiting] = useState(true);

  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:3000/api/razorpay");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      image: "/Images/logoNew.png",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };

        const result = await axios.post(
          "http://localhost:3000/api/success",
          data
        );

        alert(result.data.msg);
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const VerifyPayment = useCallback(
    async (res) => {
      let body = res.razorpay_order_id + "|" + res.razorpay_payment_id;

      let expected_signature = crypto
        .createHmac("sha256", process.env.RAZORPAY_SECRET)
        .update(body.toString())
        .digest("hex");

      console.log("sig", res.razorpay_signature);
      console.log("sigExpect", expected_signature);

      if (res.razorpay_signature === expected_signature) {
        console.log(true);
        addCourseToUser();
      }
    },
    [addCourseToUser]
  );

  const getMasterclassData = React.useCallback(async () => {
    let temp = [];
    return onSnapshot(query(collection(db, "masterclass")), (snapshot) => {
      temp = [];
      snapshot.forEach((doc) => {
        temp.push({ ...doc.data(), id: doc.id });
      });
      setMasterclassData(temp);
    });
  }, []);

  const checkUserInWaitingList = React.useCallback(
    async (index) => {
      const userId =
        session?.user?.uid ||
        session?.user?.id ||
        window.sessionStorage.getItem("user_id");
      const docRef = doc(
        db,
        "masterclass",
        MasterClassData[index].id,
        "waiting_list",
        userId
      );
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setWaiting(false);
      }
    },
    [getMasterclassData, MasterClassData]
  );

  const addUsertoWaitingList = async () => {
    const userId =
      session?.user?.uid ||
      session?.user?.id ||
      window.sessionStorage.getItem("user_id");
    const docRef = doc(
      db,
      `masterclass/${MasterClassData[clickedMasterclass].id}/waiting_list/${userId}`
    );
    await setDoc(docRef, {});
    setOpen2(false);
  };

  useEffect(() => {
    getMasterclassData();
  }, []);

  // console.log("The data ---> ", MasterClassData);

  const addCourseToUser = async () => {
    const userId =
      session?.user?.uid ||
      session?.user?.id ||
      window.sessionStorage.getItem("user_id");

    console.log(userId);
    const docRef = doc(db, "masterclass", MasterClassData[0].id);
    await updateDoc(docRef, {
      course_purchased: arrayUnion(userId),
    });
  };

  return (
    <div className="space-y-4 mb-8" id="masterclass">
      <div className="font-gilroy">
        <div className="flex w-full items-center">
          <h1 className="lg:text-6xl md:text-4xl text-2xl md:text-right font-bold text-white mb-3">
            Masterclass
          </h1>
        </div>
      </div>

      <div className="">
        {/* <button
          className="mr-1 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slidePrev();
          }}
        >
          <IoIosArrowBack size={30} />
        </button> */}
        {/* <Swiper
          onInit={(ev) => setMySwiper(ev)}
          slidesPerView={2}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            968: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1334: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
          // navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper homeSwiperSliderCards mx-auto"
        >
          {MasterClassData.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <MasterclassCard
                  title={data.title}
                  image={data.image}
                  gradient1={data.gradient1}
                  gradient2={data.gradient2}
                  gradient={data.gradient}
                />
              </SwiperSlide>
            );
          })}
         
        </Swiper> */}
        {/* <button
          className="mr-1 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slideNext();
          }}
        >
          <IoIosArrowForward size={30} />
        </button> */}
      </div>

      {/* <div className="flex md:flex-row flex-col items-center justify-center md:space-x-8 space-y-8 md:space-y-0 my-8" /> */}
      {/* <div className="relative flex py-4 items-center">
        <button className="text-white border border-white rounded-full mx-auto  px-4 py-2 font-sweet_sans_pro text-xl">
          More
        </button>
      </div> */}
      <div className="flex justify-start items-center gap-16 overflow-scroll scrollbar-hide">
        {MasterClassData.map((data, i) => {
          return (
            <MasterclassCard
              title={data.title}
              image={data.image}
              gradient1={data.gradient1}
              gradient2={data.gradient2}
              gradient={data.gradient}
            />
          );
        })}
      </div>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="absolute outline-0 top-1/2 lg:w-[25vw] md:w-[33vw] sm:w-[40vw] w-[80vw]  left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="backdrop-blur-md bg-[#0000]/30">
            <img src="/Images/masterclassNew/image1open.png" className="" />
            <div className=" space-y-4 p-8 md:text-xl text-base">
              <section className="flex justify-start items-center space-x-4">
                <FaChalkboardTeacher className="text-3xl" />
                <h1>
                  <b>Classname: </b> {MasterClassData[0]?.name}
                </h1>
              </section>
              <section className="flex justify-start items-center space-x-4">
                <MdOutlineKeyboardVoice className="text-3xl" />
                <h1>
                  <b>Instructor: </b> {MasterClassData[0]?.Instructor}
                </h1>
              </section>
              <section className="flex justify-start items-center space-x-4">
                <BsCalendar4 className="text-3xl" />
                <h1>
                  <b>Date: </b> {MasterClassData[0]?.date}
                </h1>
              </section>
              <section className="flex justify-start items-center space-x-4">
                <AiOutlineClockCircle className="text-3xl" />
                <h1>
                  <b>Time: </b> {MasterClassData[0]?.time}
                </h1>
              </section>
              <div className="text-center">
                <span
                  className="cursor-pointer bg-[#00A3FF] px-4 py-2 text-white font-gilroy rounded-md mx-auto"
                  onClick={() => {
                    setOpen(false);
                    displayRazorpay();
                  }}
                >
                  Enroll Now
                </span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
      <Modal
        open={open2}
        onClose={() => {
          setOpen2(false);
          setClickedMasterclass(-1);
          setWaiting(true);
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="absolute outline-0 top-1/2 lg:w-[25vw] md:w-[33vw] sm:w-[40vw] w-[80vw]  left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="backdrop-blur-md bg-[#0000]/30 p-8 flex justify-center items-center border-[#747474] border rounded-md">
            {!waiting ? (
              <h1 className="bg-[#34ad16e0] px-4 py-2 text-white font-gilroy rounded-md mx-auto text-xl">
                Already in Waiting List
              </h1>
            ) : (
              <h1
                className="bg-[#0038FF] px-4 py-2 text-white font-gilroy rounded-md mx-auto text-xl"
                onClick={() => addUsertoWaitingList(clickedMasterclass)}
              >
                Join Waitinglist
              </h1>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MasterClass;
