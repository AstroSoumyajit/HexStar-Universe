import React from "react";
import { useRouter } from "next/router";
import SideNav from "../../components/SideNav";
import Navbar from "../../components/Navbar";
import { webinarData } from "../../dummydb";
import Webinars from "../../components/Webinars";
import { useState } from "react";
import BoostButton from "../../components/BoostButton";
import Head from "next/head";
import WebinarsCard from "../../components/WebinarsCard";
import { db } from "../../database/firebase";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { CircularProgress } from "@material-ui/core";

const VideoOpen = () => {
  const [favouritesVideoId, setFavouriteVideoId] = useState([]);
  const router = useRouter();
  const lan = router.query.lan;
  const { data: session } = useSession();

  const WebinarDataSelected = webinarData.filter(
    (data) => data.language === lan
  );

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
    <div>
      {favouritesVideoId.length === 0 ? (
        <div className="bg-[#000000] overflow-x-hidden min-h-screen">
          <Head>
            <title>HexStar Universe</title>
            <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
          </Head>
          <SideNav />
          <Navbar />
          <div className="md:ml-16 md:px-12 px-4 py-8 space-y-8 ">
            <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold text-white md:mb-8 md:pt-24 pt-16">
              Space Talk Series
            </h1>
            <div className="flex justify-start md:space-x-6 space-x-3">
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
            {WebinarDataSelected.length == 0 ? (
              <h1 className="lg:text-5xl md:text-3xl text-1xl font-semibold text-white flex justify-center items-center">
                No Webinar Found!!
              </h1>
            ) : (
              <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 m-auto gap-6">
                {WebinarDataSelected.map((data) => {
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
                })}
              </div>
            )}
          </div>
          <BoostButton />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-black">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default VideoOpen;

export async function getStaticPaths() {
  const paths = [
    {
      params: { lan: `english` },
    },
    {
      params: { lan: `bengali` },
    },
    {
      params: { lan: `tamil` },
    },
    {
      params: { lan: `telegu` },
    },
    {
      params: { lan: `hindi` },
    },
  ];

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  const englishWebinar = webinarData.filter(
    (data) => data.language == "english"
  );
  return {
    props: {
      englishWebinar,
    },
  };
}
