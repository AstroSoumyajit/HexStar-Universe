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

  const initializeRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const makePayment = async () => {
    const res = await initializeRazorpay();

    if (!res) {
      alert("Razorpay SDK Failed to load");
      return;
    }

    // Make API call to the serverless API
    const data = await fetch("/api/razorpay", { method: "POST" }).then((t) =>
      t.json()
    );
    var options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      name: "Hexstar Universe",
      currency: data.currency,
      amount: 10,
      order_id: data.id,
      description: "Thankyou for your Purchase",
      image: "/Images/logoNew.png",
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        VerifyPayment(response);
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const VerifyPayment = async (res) => {
    let body = res.razorpay_order_id + "|" + res.razorpay_payment_id;

    let expected_signature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(body.toString())
      .digest("hex");

    console.log("sig", res.razorpay_signature);
    console.log("sigExpect", expected_signature);

    if (res.razorpay_signature === expected_signature) {
      addCourseToUser();
    }
  };

  const getMasterclassData = React.useCallback(async () => {
    let temp = [];
    return onSnapshot(
      query(collection(db, "masterclass"), orderBy("timestamp", "desc")),
      (snapshot) => {
        temp = [];
        snapshot.forEach((doc) => {
          temp.push({ ...doc.data(), id: doc.id });
        });
        // console.log("The data ---> ", temp);
        setMasterclassData(temp);
      }
    );
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

    const docRef = doc(db, "masterclass", MasterClassData[0].id);
    await updateDoc(docRef, {
      course_purchased: arrayUnion(userId),
    });
  };

  return (
    <div className="space-y-4" id="masterclass">
      <div className="font-gilroy">
        <div className="flex w-full items-center">
          <h1 className="font-gilroy bg-clip-text md:text-4xl my-8 text-[#c4c4c4] text-lg mr-8 whitespace-nowrap">
            Masterclass
          </h1>
          <hr className="border-[#363636] border-2   w-full" />
        </div>
      </div>
      <div className="w-full flex items-center justify-between">
        <button
          className="mr-1 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slidePrev();
          }}
        >
          <IoIosArrowBack size={30} />
        </button>
        <Swiper
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
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper homeSwiperSliderCards mx-auto"
        >
          {MasterClassData.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <div className="flex flex-col items-center space-y-4 cursor-pointer">
                  <img
                    src={data.poster_image}
                    className="max-w-[16rem]"
                    onClick={() => {
                      if (session || window.sessionStorage.getItem("user_id")) {
                        i === 0 ? setOpen(true) : setOpen2(true);
                        setClickedMasterclass(i);
                        checkUserInWaitingList(i);
                      }
                    }}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button
          className="mr-1 text-[#fff] rounded-full"
          onClick={() => {
            if (mySwiper) mySwiper.slideNext();
          }}
        >
          <IoIosArrowForward size={30} />
        </button>
      </div>
      {/* <div className="flex md:flex-row flex-col items-center justify-center md:space-x-8 space-y-8 md:space-y-0 my-8" /> */}
      {/* <div className="relative flex py-4 items-center">
        <button className="text-white border border-white rounded-full mx-auto  px-4 py-2 font-sweet_sans_pro text-xl">
          More
        </button>
      </div> */}
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
                    makePayment();
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
