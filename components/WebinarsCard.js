import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { setUserId } from "firebase/analytics";
import { deleteDoc, doc, addDoc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../database/firebase";

const WebinarsCard = ({
  image,
  title,
  speakerImage,
  speaker,
  route,
  videoId,
  likedAlready,
}) => {
  const { data: session } = useSession();

  const [hasliked, setHasLiked] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    if (session) {
      setUserId(session?.user?.uid || session.user.id);
    } else if (window.sessionStorage.getItem("user_id")) {
      setUserId(window.sessionStorage.getItem("user_id"));
    }
  }, [session, window]);
  // console.log(userId)

  const likePost = async () => {
    if (hasliked && userId) {
      await deleteDoc(doc(db, "users", `${userId}`, "likes", `${videoId}`));
    } else {
      const docRef = doc(db, `users/${userId}/likes`, `${videoId}`);
      await setDoc(docRef, {
        videoId: videoId,
      });
    }
  };

  return (
    <div className="">
      <div className="space-y-2 hidden md:block w-fit hover:bg-[#161616] overflow-hidden hover:scale-110 duration-200 hover:p-4 rounded-xl group">
        <div className="relative">
          <img src={image} className="rounded-3xl max-w-[20rem]" />
          {/* <Link href={`/${title}`}>
            <button className="font-sweet_sans_pro text-white rounded-md px-4 py-2 bg-[#2D2D2D] absolute bottom-4 left-4 ">
              Watch
            </button>
          </Link> */}
        </div>

        <div className="flex flex-row items-center space-x-4 max-w-[20rem]">
          <img src={speakerImage} />
          <div className="flex flex-col space-x-4">
            <h1 className="font-sweet_sans_pro tracking-wider text-white">
              {title}
            </h1>
            <h1 className="text-[#7B7A7A] text-md font-sweet_sans_pro_light">
              {speaker}
            </h1>
          </div>
        </div>
        <div
          className={`invisible group-hover:visible flex justify-between items-center ${
            userId && "space-x-8"
          }`}
        >
          <Link href={`/${route}/${title}`}>
            <button className="bg-gradient-to-r from-[#000AFF] to-[#DB00FF] w-full py-1.5 text-white font-sweet_sans_pro rounded-md ">
              Watch Stream
            </button>
          </Link>
          <div>
            {userId && (
              <div>
                {hasliked || likedAlready ? (
                  <AiFillHeart
                    className="text-3xl text-purple-600 cursor-pointer"
                    onClick={() => {
                      setHasLiked(!hasliked);
                      likePost();
                    }}
                  />
                ) : (
                  <AiOutlineHeart
                    className="text-3xl text-purple-600 cursor-pointer"
                    onClick={() => {
                      setHasLiked(!hasliked);
                      likePost();
                      likedAlready = false;
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="space-y-2 md:hidden w-fit hover:bg-[#161616] rounded-md">
        <div className="relative">
          <img src={image} className="rounded-3xl max-w-[20rem]" />
          {userId && (
            <div className="absolute top-2 right-2 md:hidden">
              {hasliked || likedAlready ? (
                <AiFillHeart
                  className="text-3xl text-purple-600 cursor-pointer bg-[hsl(280,88%,90%)] rounded-full p-1"
                  onClick={() => {
                    setHasLiked(!hasliked);
                    likePost();
                  }}
                />
              ) : (
                <AiOutlineHeart
                  className="text-3xl text-purple-600 cursor-pointer bg-[hsl(280,88%,90%)] rounded-full p-1"
                  onClick={() => {
                    setHasLiked(!hasliked);
                    likePost();
                    likedAlready = false;
                  }}
                />
              )}
            </div>
          )}
                  
        </div>

        <div className="flex flex-row items-center space-x-4 max-w-[20rem]">
          <img src={speakerImage} className="w-12 h-12"/>
          <div className="flex flex-col">
            <h1 className="font-sweet_sans_pro tracking-wider text-white text-sm">
              {title}
            </h1>
            <h1 className="text-[#7B7A7A] text-md font-sweet_sans_pro_light">
              {speaker}
            </h1>
          </div>
        </div>
        {/* <div
          className={`invisible group-hover:visible flex justify-between items-center ${
            userId && "space-x-8"
          }`}
        >
          <Link href={`/${route}/${title}`}>
            <button className="bg-gradient-to-r from-[#000AFF] to-[#DB00FF] w-full py-1.5 text-white font-sweet_sans_pro rounded-md ">
              Watch Stream
            </button>
          </Link>
          <div>
            {userId && (
              <div>
                {hasliked || likedAlready ? (
                  <AiFillHeart
                    className="text-3xl text-purple-600 cursor-pointer"
                    onClick={() => {
                      setHasLiked(!hasliked);
                      likePost();
                    }}
                  />
                ) : (
                  <AiOutlineHeart
                    className="text-3xl text-purple-600 cursor-pointer"
                    onClick={() => {
                      setHasLiked(!hasliked);
                      likePost();
                      likedAlready = false;
                    }}
                  />
                )}
              </div>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default WebinarsCard;
