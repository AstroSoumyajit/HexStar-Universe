import React from "react";
import WebinarsCard from "./WebinarsCard";
import Link from "next/link";
import DrawerSection from "./DrawerSection";
import { useState } from "react";
import { border } from "@mui/system";
// import {webinarData} from '../dummydb';
import { webinarData } from "../dummydb";
import { MdKeyboardArrowDown } from "react-icons/md";

const Webinars = ({ title }) => {
  const [allWebinars, setAllWebinars] = React.useState(false);
  const [english, setEnglish] = React.useState(true);
  const [bengali, setBengali] = React.useState(false);
  const [hindi, setHindi] = React.useState(false);
  const [tamil, setTamil] = React.useState(false);
  const [telegu, setTelegu] = React.useState(false);
  const [showLanguage, setShowLanguage] = useState(false);

  const englishWebinar = webinarData.filter(
    (data) => data.language == "english"
  );
  const bengaliWebinar = webinarData.filter(
    (data) => data.language == "bengali"
  );

  console.log(englishWebinar);

  // console.log(webinarData)
  return (
    <div className="my-8" id="webinars">
      <div className="hidden md:block">
        <div className="flex w-full items-center">
          <img src="/Webinars.png" className="mr-8" />
          <hr className="border-[#363636] border-2 w-full" />
        </div>
      </div>
      <img src="/webinarsHeading.png" className="md:hidden"/>

      <div className="pb-6">
        <button
          className="text-white border border-white rounded-full px-4 py-2 flex items-center space-x-4 md:text-lg text-sm my-4 font-gilroy"
          onClick={() => setShowLanguage(!showLanguage)}
        >
          Select your Language <MdKeyboardArrowDown className="text-3xl" />
        </button>
        {showLanguage && (
          <div className="flex justify-between scrollbar-hide xl:space-x-44 lg:space-x-32 :space-x-24 space-x-4 py-4 overflow-x-scroll">
            <section
              className={`${
                english && "border-2 border-white"
              } p-1 rounded-full`}
            >
              <button
                className="md:w-36 w-28 focus:outline-none bg-gradient-to-r from-[#FF00F5] to-[#0038FF] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider"
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
                className="w-36 focus:outline-none bg-gradient-to-r from-[#2CDE00] to-[#0038FF] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider"
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
                className="w-36 focus:outline-none bg-gradient-to-r from-[#FF00B8] to-[#F8C100] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider "
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
                className="w-36 focus:outline-none bg-gradient-to-r from-[#0038FF] to-[#FF00F5] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider"
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
                className="w-36 focus:outline-none bg-gradient-to-r from-[#2400FF] to-[#87a0f3] md:px-4 px-2 md:py-2 py-1 rounded-full md:text-2xl text-base text-white font-semibold font-sweet_sans_pro tracking-wider"
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
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 m-auto md:gap-8 gap-12">
            {!allWebinars
              ? englishWebinar.slice(0, 6).map((data) => {
                  return (
                    <WebinarsCard
                      key={data.key}
                      image={data.thumbnail}
                      title={data.title}
                      speaker={data.speaker}
                      speakerImage={data.speakerImage}
                      route={"english"}
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
              } text-white bg-gradient-to-b from-[#9E00FF] via-[#8F00FF] to-[#130EFF] rounded-full px-4 py-[3px] font-sweet_sans_pro text-xl`}
              onClick={() => setAllWebinars(false)}
            >
              Less
            </button>
          </div>
        </div>
      )}
      {bengali && (
        <div className="my-8 min-h-[50vh]">
          {bengaliWebinar.map((data) => {
            return (
              <WebinarsCard
                key={data.key}
                image={data.thumbnail}
                title={data.title}
                speaker={data.speaker}
                speakerImage={data.speakerImage}
                route={"bengali"}
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
        <div className=" text-white  font-semibold">
          {" "}
          <h1 className="lg:text-6xl md:text-4xl text-2xl min-h-[50vh] flex justify-center items-center">
            Comming Soon...
          </h1>
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
