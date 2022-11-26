import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../database/firebase";
import { useSession } from "next-auth/react";
import { useLogin } from "../../context/LoginContext";

const UserProfilePublic = () => {
  const {userData, setUserData} = useLogin()
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
  }, [router.isReady]);
  return (
    <div className="bg-[#000] overflow-x-auto ">
      <Head>
        <title>HexStar Universe</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Navbar />
      <div className="divide-x-[1px] divide-[#1E1E1E]">
        <div className="font-gilroy bg-black text-[#818181] fixed left-0 child:w-[10rem] child:text-center child:px-6 child:py-3 h-screen child:flex child:items-center child:justify-center child:rounded-lg px-2">
          <section className="hover:bg-[#1E1E1E] hover:text-white">
            <BiUserCircle className="text-2xl mr-4" /> My Profile
          </section>
          <section className="hover:bg-[#1E1E1E] hover:text-white">
            <AiOutlineHeart className="text-2xl mr-4" />
            Favourites
          </section>
        </div>
        <div className="text-white ml-[12rem] min-h-screen">
          {data ? (
            <div className="flex justify-center items-center">
              <section className="mt-8 text-xl font-gilroy space-y-4 flex flex-col justify-center items-center">
                <img
                  src={`${session?.user?.image || "/user.jpg"}`}
                  className="rounded-full w-24 h-24"
                />
                <h1>{data.name}</h1>
                <h1 className="text-base text-zinc-400">{data.email}</h1>
              </section>
            </div>
          ) : (
            <div>User not found!!</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePublic;
