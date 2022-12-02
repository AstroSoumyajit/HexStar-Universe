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
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../database/firebase";
import { async } from "@firebase/util";
import { useSession } from "next-auth/react";
import { useLogin } from "../context/LoginContext";

const MasterClass = () => {
  const { userData, setUserData } = useLogin();
  const [mySwiper, setMySwiper] = useState(null);
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [clickedMasterclass, setClickedMasterclass] = useState(-1);
  const [mounted, setMounted] = useState(false);
  const [MasterClassData, setMasterclassData] = useState([]);
  const { data: session } = useSession();

  const getMasterclassData = async () => {
    let temp = [];
    return onSnapshot(query(collection(db, "masterclass")), (snapshot) => {
      temp = [];
      snapshot.forEach((doc) => {
        temp.push({ ...doc.data(), id: doc.id });
      });
      getWaitingListData(temp);
    });
  };

  const getWaitingListData = async (temp) => {
    console.log("initiated");
    temp.map((masterclass, i) => {
      return onSnapshot(
        query(collection(db, "masterclass", masterclass.id, "waiting_list")),
        (snapshot) => {
          let tempNew = [];
          snapshot.forEach((doc) => {
            tempNew.push(doc.data().user_id);
          });
          temp[i] = { ...temp[i], waitingList: tempNew };
        }
      );
    });
    setMasterclassData(temp);
  };

  const addUsertoWaitingList = async () => {
    const masterclassRef = collection(
      db,
      "masterclass",
      MasterClassData[clickedMasterclass].id,
      "waiting_list"
    );
    await addDoc(masterclassRef, {
      user_id:
        session?.user?.id ||
        session?.user?.uid ||
        window.sessionStorage.getItem("user_id"),
      name: session?.user?.name || userData.name,
    });
    setOpen2(false);
  };

  useEffect(() => {
    getMasterclassData();
  }, [db]);

  console.log(MasterClassData);

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
                        i === 2 ? setOpen(true) : setOpen2(true);
                        setClickedMasterclass(i);
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
                  <b>Classname: </b> {MasterClassData[2]?.name}
                </h1>
              </section>
              <section className="flex justify-start items-center space-x-4">
                <MdOutlineKeyboardVoice className="text-3xl" />
                <h1>
                  <b>Instructor: </b> {MasterClassData[2]?.Instructor}
                </h1>
              </section>
              <section className="flex justify-start items-center space-x-4">
                <BsCalendar4 className="text-3xl" />
                <h1>
                  <b>Date: </b> {MasterClassData[2]?.date}
                </h1>
              </section>
              <section className="flex justify-start items-center space-x-4">
                <AiOutlineClockCircle className="text-3xl" />
                <h1>
                  <b>Time: </b> {MasterClassData[2]?.Time}
                </h1>
              </section>
              <div className="text-center">
                <button className="bg-[#00A3FF] px-4 py-2 text-white font-gilroy rounded-md mx-auto">
                  Enroll Now
                </button>
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
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="absolute outline-0 top-1/2 lg:w-[25vw] md:w-[33vw] sm:w-[40vw] w-[80vw]  left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="backdrop-blur-md bg-[#0000]/30 p-8 flex justify-center items-center border-[#747474] border rounded-md">
            {MasterClassData[clickedMasterclass]?.waitingList.length !== 0 ? (
              <div>
                {MasterClassData[clickedMasterclass]?.waitingList.find(
                  (id) =>
                    id === session?.user?.id ||
                    session?.user?.uid ||
                    window.sessionStorage.getItem("user_id")
                ) ? (
                  <h1 className="bg-[#34ad16e0] px-4 py-2 text-white font-gilroy rounded-md mx-auto text-xl">
                    Already in Waiting List{" "}
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
            ) : (
              <button
                className="bg-[#0038FF] px-4 py-2 text-white font-gilroy rounded-md mx-auto text-xl"
                onClick={() => addUsertoWaitingList(clickedMasterclass)}
              >
                Join Waitinglist
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MasterClass;
