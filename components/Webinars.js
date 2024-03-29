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
import { useLogin } from "../context/LoginContext";

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

  const englishWebinar = webinarData.filter(
    (data) => data.language == "english"
  );
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
    <div className="my-8" id="webinars">
      <div className="hidden md:block">
        <div className="flex w-full items-center">
          <h1 className="font-gilroy bg-clip-text md:text-4xl md:my-8 my-4 text-white text-lg mr-8 whitespace-nowrap">
            Webinars
          </h1>
          <hr className="border-[#363636] border-2  hidden md:block w-full" />
        </div>
      </div>
      <img src="/webinarsHeading.png" className="md:hidden" />

      <div className="pb-6">
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
      </div>

      {english && (
        <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 m-auto gap-6 justify-items-center">
            {!allWebinars
              ? englishWebinar.slice(0, 8).map((data) => {
                  return (
                    <WebinarsCard
                      key={data.key}
                      image={data.thumbnail}
                      title={data.title}
                      speaker={data.speaker}
                      speakerImage={data.speakerImage}
                      videoId={data.videoID}
                      route={data.language}
                      likedAlready={favouritesVideoId.find(
                        (id) => id === data.videoID
                      )}
                    />
                  );
                })
              : englishWebinar.map((data) => {
                  return (
                    <WebinarsCard
                      key={data.key}
                      image={data.thumbnail}
                      title={data.title}
                      speaker={data.speaker}
                      speakerImage={data.speakerImage}
                      route={"english"}
                      videoId={data.videoID}
                      likedAlready={favouritesVideoId.find(
                        (id) => id === data.videoID
                      )}
                    />
                  );
                })}
          </div>
          <div className="relative flex py-5 items-center">
            <button
              className={`${
                allWebinars && "hidden"
              } text-white  rounded-full px-4 py-2 font-sweet_sans_pro border border-white text-xl mx-auto`}
              onClick={() => setAllWebinars(true)}
            >
              More
            </button>
            <button
              className={`${
                !allWebinars && "hidden"
              } text-white  rounded-full px-4 py-2 font-sweet_sans_pro border border-white text-xl mx-auto`}
              onClick={() => setAllWebinars(false)}
            >
              Less
            </button>
          </div>
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
