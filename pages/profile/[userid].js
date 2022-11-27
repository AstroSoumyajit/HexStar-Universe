import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../database/firebase";
import { useSession } from "next-auth/react";
import { useLogin } from "../../context/LoginContext";
import UserProfile from "../../components/ProfilePage/UserProfile";
import Favourite from "../../components/ProfilePage/Favourite";

const UserProfilePublic = () => {
  const { userData, setUserData } = useLogin();
  const [profile, setProfile] = useState(true);
  const [favourites, setFavourites] = useState(false);
  const [favouritesVideoData, setFavouriteVideoId] = useState([]);
  const [data, setData] = useState(null);
  const { data: session } = useSession();
  const router = useRouter();
  const userId = router.query.userid;
  const getUserData = async () => {
    if (userId) {
      const userRef = doc(db, "users", userId);
      const userDocSnap = await getDoc(userRef);
      if (userDocSnap.exists()) {
        setData({ ...userDocSnap.data() });
      }
    } else {
      return;
    }
  };

  useEffect(() => {
    getUserData();
    getUserLikeData();
  }, []);

  const getUserLikeData = async () => {
    if (userId) {
      const likeSnapshot = await getDocs(
        collection(db, "users", userId, "likes")
      );
      let temp = [];
      likeSnapshot.forEach((doc) => {
        temp.push(doc.id);
      });
      setFavouriteVideoId(temp);
    } else {
      return;
    }
  };

  return (
    <div className="bg-[#000] overflow-x-auto ">
      <Head>
        <title>HexStar Universe</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <div className="divide-x-[1px] divide-[#1E1E1E]">
        <div className="font-gilroy bg-black text-[#818181] fixed left-0 child:w-[10rem] child:text-center child:px-6 child:py-3 h-screen child:flex child:items-center child:justify-center child:rounded-lg px-2">
          <section
            className="hover:bg-[#1E1E1E] hover:text-white"
            onClick={() => {
              setProfile(true);
              setFavourites(false);
            }}
          >
            <BiUserCircle className="text-2xl mr-4" /> My Profile
          </section>
          <section
            className="hover:bg-[#1E1E1E] hover:text-white"
            onClick={() => {
              setFavourites(true);
              setProfile(false);
            }}
          >
            <AiOutlineHeart className="text-2xl mr-4" />
            Favourites
          </section>
        </div>
        <div className="text-white ml-[12rem] min-h-[91vh]">
          {profile && (
            <div>
              {data ? (
                <UserProfile
                  name={data.name}
                  image={session?.user?.image || "/user.jpg"}
                  email={session?.user?.email || data.email}
                />
              ) : (
                <div className="flex justify-center items-center text-xl text-red-500 h-full">
                  <div className="mt-8 flex items-center">User not found!</div>
                </div>
              )}
            </div>
          )}
          {favourites && (
            <div>
              {favouritesVideoData.length !== 0 ? (
                <Favourite likedVideo={favouritesVideoData} />
              ) : (
                <div>No Liked Video</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePublic;
