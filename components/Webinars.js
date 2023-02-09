import React from "react";
import WebinarsCard from "./WebinarsCard";
import Link from "next/link";
import DrawerSection from "./DrawerSection";
import { useState } from "react";
import { border } from "@mui/system";
// import {webinarData} from '../dummydb';
import { webinarData } from "../dummydb";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useEffect } from "react";
import { collection, getDocs, onSnapshot, query } from "firebase/firestore";
import { db } from "../database/firebase";
import { useSession } from "next-auth/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const Webinars = ({ title }) => {
  const [allWebinars, setAllWebinars] = React.useState(false);
  const [english, setEnglish] = React.useState(true);
  const [bengali, setBengali] = React.useState(false);
  const [hindi, setHindi] = React.useState(false);
  const [tamil, setTamil] = React.useState(false);
  const [telegu, setTelegu] = React.useState(false);
  const [showLanguage, setShowLanguage] = useState(false);
  const [favouritesVideoId, setFavouriteVideoId] = useState([]);
  const { data: session } = useSession();

  const englishWebinar = [
    {
      key: 23,
      linkEmbed: "https://www.youtube.com/embed/9Uh9HfxJyZo",
      title: "Peeping into cosmos through citizen science ",
      thumbnail: "/Images/Webinars/english/image/image23.png",
      speaker: "-Shubham Srivastav",
      speakerImage: "/Images/Webinars/english/person/person23.png",
      videoID: "9Uh9HfxJyZo",
      language: "english",
      gradient1: "from-[#FF5C00]",
      gradient2: "to-[#FF0000]",
    },
    {
      key: 22,
      linkEmbed: "https://www.youtube.com/embed/9Uh9HfxJyZo",
      title: "Glimpses of Cutting Edge Astrophysics",
      thumbnail: "/Images/Webinars/english/image/image22.png",
      speaker: "-Prof. Prajval Shastri",
      speakerImage: "/Images/Webinars/english/person/person22.png",
      videoID: "9Uh9HfxJyZo",
      language: "english",
      gradient1: "from-[#6C00FE]",
      gradient2: "to-[#2D00FE]",
    },
    {
      key: 21,
      linkEmbed: "https://www.youtube.com/embed/9Uh9HfxJyZo",
      title:
        "Decoding the mysteries of the universe: Dark Energy and Dark Matter",
      thumbnail: "/Images/Webinars/english/image/image21.png",
      speaker: "-Prof. Prajval Shastri",
      speakerImage: "/Images/Webinars/english/person/person21.png",
      videoID: "9Uh9HfxJyZo",
      language: "english",
      gradient1: "from-[#3963F6]",
      gradient2: "to-[#000000]",
    },
    {
      key: 19,
      linkEmbed: "https://www.youtube.com/embed/9Uh9HfxJyZo",
      title: "Rocket Propulsion",
      thumbnail: "/Images/Webinars/english/image/image19.png",
      speaker: "Vani Sadadiwala",
      speakerImage: "/Images/Webinars/english/person/person19.png",
      videoID: "9Uh9HfxJyZo",
      language: "english",
      gradient1: "from-[#7700D5]",
      gradient2: "to-[#000000]",
    },
    {
      key: 20,
      linkEmbed: "https://www.youtube.com/embed/ovAbClBbb8s",
      title: "How to help Scientists through Citizen Science Projects",
      thumbnail: "/Images/Webinars/english/image/image20.png",
      speaker: "-Dr. Himadri Sekhar Dasn",
      speakerImage: "/Images/Webinars/english/person/person20.png",
      videoID: "ovAbClBbb8s",
      language: "english",
  },

  {
      key: 18,
      linkEmbed: "https://youtube.com/embed/RhZrf5iBVTo",
      title: "Exoplanet Exploration and Aerodymics of Aerofoil",
      thumbnail: "/Images/Webinars/english/image/image18.png",
      speaker: "-Golsar Akash",
      speakerImage: "/Images/Webinars/english/person/person18.png",
      videoID: "RhZrf5iBVTo ",
      language: "english",
  },
  ];
  const bengaliWebinar = webinarData.filter(
    (data) => data.language == "bengali"
  );
  const tamilWebinars = webinarData.filter((data) => data.language == "tamil");

  //check wheather the video is liked?
  const getUserLikeData = () => {
    let temp = [];
    return onSnapshot(
      query(
        collection(
          db,
          "users",
          session?.user?.id ||
            session?.user?.uid ||
            window.sessionStorage.getItem("user_id"),
          "likes"
        )
      ),
      (snapshot) => {
        temp = [];
        snapshot.forEach((doc) => {
          temp.push(doc.id);
        });
        setFavouriteVideoId(temp);
      }
    );
  };

  useEffect(() => {
    if (
      session?.user?.id ||
      session?.user?.uid ||
      window.sessionStorage.getItem("user_id")
    ) {
      getUserLikeData();
    }
  }, [db]);

  return (
    <div className="my-8 font-gilroy" id="webinars">
      <div className="hidden md:block">
        <div className="flex w-full items-center">
          {/* <h1 className="font-gilroy bg-clip-text md:text-4xl md:my-8 my-4 text-white text-lg mr-8 whitespace-nowrap">
            Webinars
          </h1>
          <hr className="border-[#363636] border-2  hidden md:block w-full" /> */}
          <h1 className="lg:text-6xl md:text-4xl text-2xl md:text-right font-bold text-white mb-3">
            Space Talk Series
          </h1>
        </div>
      </div>
      {/* <img src="/webinarsHeading.png" className="md:hidden" /> */}

      {/* <div className="pb-6">
        <button
          className="text-white border border-white rounded-full md:px-4 px-2 md:py-2 py-1 flex items-center space-x-4 md:text-lg text-sm my-2 md:my-4 font-gilroy"
          onClick={() => setShowLanguage(!showLanguage)}
        >
          Select Language <MdKeyboardArrowDown className="text-3xl" />
        </button>
        {showLanguage && (
          <div className="flex justify-between scrollbar-hide xl:space-x-44 lg:space-x-32 :space-x-24 space-x-4 py-4 overflow-x-scroll">
            <section
              className={`${
                english && "border-2 border-white"
              } p-1 rounded-full`}
            >
              <button
                className="md:w-36 w-24 focus:outline-none bg-gradient-to-r from-[#FF00F5] to-[#0038FF] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider"
                onClick={() => {
                  setEnglish(true);
                  setBengali(false);
                  setHindi(false);
                  setTamil(false);
                  setTelegu(false);
                }}
              >
                English
              </button>
            </section>
            <section
              className={`${
                bengali && "border-2 border-white"
              } p-1 rounded-full`}
            >
              <button
                className="md:w-36 w-24 focus:outline-none bg-gradient-to-r from-[#2CDE00] to-[#0038FF] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider"
                onClick={() => {
                  setEnglish(false);
                  setBengali(true);
                  setHindi(false);
                  setTamil(false);
                  setTelegu(false);
                }}
              >
                বাংলা
              </button>
            </section>
            <section
              className={`${hindi && "border-2 border-white"} p-1 rounded-full`}
            >
              <button
                className="md:w-36 w-24 focus:outline-none bg-gradient-to-r from-[#FF00B8] to-[#F8C100] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider "
                onClick={() => {
                  setEnglish(false);
                  setBengali(false);
                  setHindi(true);
                  setTamil(false);
                  setTelegu(false);
                }}
              >
                हिन्दी
              </button>
            </section>
            <section
              className={`${tamil && "border-2 border-white"} p-1 rounded-full`}
            >
              <button
                className="md:w-36 w-24 focus:outline-none bg-gradient-to-r from-[#0038FF] to-[#FF00F5] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider"
                onClick={() => {
                  setEnglish(false);
                  setBengali(false);
                  setHindi(false);
                  setTamil(true);
                  setTelegu(false);
                }}
              >
                தமிழ்
              </button>
            </section>
            <section
              className={`${
                telegu && "border-2 border-white"
              } p-1 rounded-full`}
            >
              <button
                className="md:w-36 w-24 focus:outline-none bg-gradient-to-r from-[#2400FF] to-[#87a0f3] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider"
                onClick={() => {
                  setEnglish(false);
                  setBengali(false);
                  setHindi(false);
                  setTamil(false);
                  setTelegu(true);
                }}
              >
                తెలుగు
              </button>
            </section>
          </div>
        )}
      </div> */}
      <div className="flex justify-start md:space-x-6 space-x-3 my-4">
        <Link href="/spacetalk/english">
          <h1 className="rounded-full border border-white px-4 py-2 w-20 text-sm md:text-base cursor-pointer md:w-28 text-center text-white font-gilroy ">
            English
          </h1>
        </Link>
        <Link href="/spacetalk/hindi">
          <h1 className="rounded-full border border-white px-4 py-2 w-20 text-sm md:text-base cursor-pointer md:w-28 text-center text-white font-gilroy ">
            Hindi
          </h1>
        </Link>
        <Link href="/spacetalk/bengali">
          <h1 className="rounded-full border border-white px-4 py-2 w-20 text-sm md:text-base cursor-pointer md:w-28 text-center text-white font-gilroy ">
            Bengali
          </h1>
        </Link>
      </div>

      {english && (
        <div>
          <div className="">
            <Swiper
              // onInit={(ev) => setMySwiper(ev)}
              slidesPerView={1}
              slidesPerGroup={2}
              loop={false}
              loopFillGroupWithBlank={true}
              
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1334: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
                1574: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
              // navigation={true}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper homeSwiperSliderCards"
            >
              {englishWebinar.map((data, i) => {
                return (
                  <SwiperSlide key={i}>
                    <WebinarsCard
                      image={data.thumbnail}
                      title={data.title}
                      speaker={data.speaker}
                      speakerImage={data.speakerImage}
                      videoId={data.videoID}
                      route={data.language}
                      likedAlready={favouritesVideoId.find(
                        (id) => id === data.videoID
                      )}
                      gradient1={data.gradient1}
                      gradient2={data.gradient2}
                    />
                  </SwiperSlide>
                );
              })}
              <SwiperSlide>
                <div className="w-[15rem] h-[22rem] rounded-xl font-bold text-3xl flex justify-center items-center text-white bg-[#161616] cursor-pointer" onClick={()=> window.location.href = '/spacetalk/english'}>
                  ...
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className="relative flex py-5 mt-8 items-center">
           
          </div> */}
        </div>
      )}
      {bengali && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 m-auto gap-6">
          {bengaliWebinar.map((data) => {
            return (
              <WebinarsCard
                key={data.key}
                image={data.thumbnail}
                title={data.title}
                speaker={data.speaker}
                speakerImage={data.speakerImage}
                route={"bengali"}
                videoId={data.videoID}
                likedAlready={favouritesVideoId.find(
                  (id) => id === data.videoID
                )}
              />
            );
          })}
        </div>
      )}
      {hindi && (
        <div className=" text-white  font-semibold">
          {" "}
          <h1 className="lg:text-6xl md:text-4xl text-2xl min-h-[50vh] flex justify-center items-center">
            Comming Soon...
          </h1>
        </div>
      )}
      {tamil && (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 m-auto gap-6">
          {tamilWebinars.map((data) => {
            return (
              <WebinarsCard
                key={data.key}
                image={data.thumbnail}
                title={data.title}
                speaker={data.speaker}
                speakerImage={data.speakerImage}
                route={data.language}
                videoId={data.videoID}
                likedAlready={favouritesVideoId.find(
                  (id) => id === data.videoID
                )}
              />
            );
          })}
        </div>
      )}
      {telegu && (
        <div className=" text-white  font-semibold">
          {" "}
          <h1 className="lg:text-6xl md:text-4xl text-2xl min-h-[50vh] flex justify-center items-center">
            Comming Soon...
          </h1>
        </div>
      )}
    </div>
  );
};

export default Webinars;
