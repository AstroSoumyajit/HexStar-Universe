import Head from "next/head";
import React from "react";
import Navbar from "../../components/Navbar";
import SideNav from "../../components/SideNav";
import { BiGroup, BiUserCircle } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../../database/firebase";
import { useSession } from "next-auth/react";
import { useLogin } from "../../context/LoginContext";
import UserProfile from "../../components/ProfilePage/UserProfile";
import Favourites from "../../components/ProfilePage/Favourites";
import Dashboard from "../../components/ProfilePage/Dashboard";
import { BsCalendar2, BsJournalBookmark, BsSpeedometer2 } from "react-icons/bs";
import MyCourses from "../../components/ProfilePage/MyCourses";

const UserProfilePublic = () => {
  const { userData, setUserData } = useLogin();
  const [profile, setProfile] = useState(true);
  const [favourites, setFavourites] = useState(false);
  const [dashboard, setDashboard] = useState(false);
  const [eventCalender, setEventCalender] = useState(false);
  const [myCourse, setMyCourse] = useState(false);
  const [uploadBadges, setUploadBadges] = useState(false);
  const [roadmap, setRoadmap] = useState(false);
  const [oneToOne, setOnetoOne] = useState(false);
  const [favouritesVideoData, setFavouriteVideoId] = useState([]);
  const [scroll, setScroll] = useState(0);
  const { data: session } = useSession();
  const router = useRouter();

  const userId = router.query.userid;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY);
    });
  }, [window]);

  const getUserData = async () => {
    const userRef = doc(db, "users", userId);
    const userDocSnap = await getDoc(userRef);
    if (userDocSnap.exists()) {
      setUserData({ ...userDocSnap.data() });
    }
  };

  React.useEffect(() => {
    getUserData();
    getUserLikeData();
  }, [db]);

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

  return (
    <div className="bg-[#000] overflow-x-auto ">
      <Head>
        <title>HexStar Universe</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <Navbar userPage={true} />
      <div className="divide-x-[1px] divide-[#1E1E1E]">
        <div
          className={`font-gilroy bg-black text-[#818181] fixed left-0 md:child:w-[15rem] ${
            scroll > 85 && "top-1"
          } child:text-center child:px-2 md:child:px-6 child:py-3 h-screen child:flex child:items-center child:justify-start child:rounded-lg px-2 space-y-4`}
        >
          {/* profile */}
          <section
            className={`${
              profile
                ? "bg-[#1E1E1E] text-white"
                : "hover:bg-[#1E1E1E] hover:text-white "
            } cursor-pointer space-x-2 flex items-center`}
            onClick={() => {
              setEventCalender(false);
              setProfile(true);
              setFavourites(false);
              setDashboard(false);
              setMyCourse(false);
              setUploadBadges(false);
              setRoadmap(false);
              setOnetoOne(false);
            }}
          >
            <BiUserCircle className="text-2xl" />{" "}
            <span className="hidden md:block">My Profile</span>
          </section>

          {/* Dashboard */}
          <section
            className={`${
              dashboard
                ? "bg-[#1E1E1E] text-white"
                : "hover:bg-[#1E1E1E] hover:text-white "
            } cursor-pointer space-x-2 flex items-center`}
            onClick={() => {
              setEventCalender(false);
              setProfile(false);
              setFavourites(false);
              setDashboard(true);
              setMyCourse(false);
            }}
          >
            <BsSpeedometer2 className="text-2xl" />
            <span className="hidden md:block"> Dashboard</span>
          </section>

          {/* Event Calender */}
          <section
            className={`${
              eventCalender
                ? "bg-[#1E1E1E] text-white"
                : "hover:bg-[#1E1E1E] hover:text-white "
            } cursor-pointer space-x-2 flex items-center`}
            onClick={() => {
              setDashboard(false);
              setProfile(false);
              setFavourites(false);
              setEventCalender(true);
              setMyCourse(false);
              setUploadBadges(false);
              setRoadmap(false);
              setOnetoOne(false);
            }}
          >
            <BsCalendar2 className="text-2xl" />
            <span className="hidden md:block">Event Calender</span>
          </section>

          {/* My Course */}
          <section
            className={`${
              myCourse
                ? "bg-[#1E1E1E] text-white"
                : "hover:bg-[#1E1E1E] hover:text-white "
            } cursor-pointer space-x-2 flex items-center`}
            onClick={() => {
              setDashboard(false);
              setProfile(false);
              setFavourites(false);
              setEventCalender(false);
              setMyCourse(true);
              setUploadBadges(false);
              setRoadmap(false);
              setOnetoOne(false);
            }}
          >
            <BsJournalBookmark className="text-2xl" />
            <span className="hidden md:block">My Course</span>
          </section>

          {/* favourites */}
          <section
            className={`${
              favourites
                ? "bg-[#1E1E1E] text-white"
                : "hover:bg-[#1E1E1E] hover:text-white "
            } cursor-pointer space-x-2 flex items-center`}
            onClick={() => {
              setDashboard(false);
              setProfile(false);
              setFavourites(true);
              setEventCalender(false);
              setMyCourse(false);
              setUploadBadges(false);
              setRoadmap(false);
              setOnetoOne(false);
            }}
          >
            <AiOutlineHeart className="text-2xl" />
            <span className="hidden md:block">Favourites</span>
          </section>

          {/* Upload Badge */}
          <section
            className={`${
              uploadBadges
                ? "bg-[#1E1E1E] text-white"
                : "hover:bg-[#1E1E1E] hover:text-white "
            } cursor-pointer space-x-2 flex items-center`}
            onClick={() => {
              setDashboard(false);
              setProfile(false);
              setFavourites(false);
              setEventCalender(false);
              setMyCourse(false);
              setUploadBadges(true);
              setRoadmap(false);
              setOnetoOne(false);
            }}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 12 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.40973 11.603L8.52228 13.8856L6.21333 12.2811L3.89144 13.8872L4.00409 11.603H3.02894L2.86087 15.0118H3.97764L6.21205 13.4663L8.43612 15.0118H9.55294L9.38487 11.603H8.40973ZM11.0587 4.63046L10.9919 3.16788L9.75881 2.37876L8.96954 1.14551L7.50693 1.07855L6.20691 0.405273L4.90689 1.0787L3.44427 1.14566L2.655 2.37876L1.42188 3.16788L1.3551 4.63046L0.681641 5.93051L1.3551 7.23059L1.42206 8.69314L2.655 9.48226L3.44415 10.7155L4.90676 10.7823L6.20691 11.4558L7.50693 10.7823L8.96954 10.7155L9.75869 9.48226L10.9919 8.69326L11.0587 7.23071L11.7322 5.93063L11.0587 4.63046ZM10.0955 6.97249L10.0419 8.14471L9.05345 8.77717L8.42099 9.76559L7.24874 9.81916L6.20691 10.3589L5.16495 9.81916L3.9927 9.76559L3.36024 8.77717L2.37195 8.14471L2.31841 6.97249L1.77844 5.93051L2.31829 4.88874L2.37195 3.71634L3.36024 3.08387L3.9927 2.09549L5.16495 2.04192L6.20691 1.50216L7.24886 2.04189L8.42111 2.09546L9.05357 3.08384L10.0419 3.71634L10.0954 4.88859L10.6354 5.93051L10.0955 6.97249Z"
                fill={`${uploadBadges ? "#FFFFFF" : "#818181"}`}
              />
            </svg>

            <span className="hidden md:block">Upload Badges</span>
          </section>

          {/* Roadmap */}
          <section
            className={`${
              roadmap
                ? "bg-[#1E1E1E] text-white"
                : "hover:bg-[#1E1E1E] hover:text-white "
            } cursor-pointer space-x-2 flex items-center`}
            onClick={() => {
              setDashboard(false);
              setProfile(false);
              setFavourites(false);
              setEventCalender(false);
              setMyCourse(false);
              setUploadBadges(false);
              setRoadmap(true);
              setOnetoOne(false);
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.25 20.625H2.75C2.38544 20.6246 2.03591 20.4797 1.77813 20.2219C1.52035 19.9641 1.37536 19.6146 1.375 19.25V16.5C1.37536 16.1354 1.52035 15.7859 1.77813 15.5281C2.03591 15.2703 2.38544 15.1254 2.75 15.125H8.25C8.61456 15.1254 8.96409 15.2703 9.22187 15.5281C9.47965 15.7859 9.62464 16.1354 9.625 16.5V19.25C9.62464 19.6146 9.47965 19.9641 9.22187 20.2219C8.96409 20.4797 8.61456 20.6246 8.25 20.625ZM2.75 16.5V19.25H8.25V16.5H2.75ZM19.25 13.75H8.25C7.88544 13.7496 7.53591 13.6047 7.27813 13.3469C7.02035 13.0891 6.87536 12.7396 6.875 12.375V9.625C6.87536 9.26044 7.02035 8.91091 7.27813 8.65313C7.53591 8.39535 7.88544 8.25036 8.25 8.25H19.25C19.6146 8.25036 19.9641 8.39535 20.2219 8.65313C20.4797 8.91091 20.6246 9.26044 20.625 9.625V12.375C20.6246 12.7396 20.4797 13.0891 20.2219 13.3469C19.9641 13.6047 19.6146 13.7496 19.25 13.75ZM8.25 9.625V12.375H19.25V9.625H8.25ZM11 6.875H2.75C2.38544 6.87464 2.03591 6.72965 1.77813 6.47187C1.52035 6.21409 1.37536 5.86456 1.375 5.5V2.75C1.37536 2.38544 1.52035 2.03591 1.77813 1.77813C2.03591 1.52035 2.38544 1.37536 2.75 1.375H11C11.3646 1.37536 11.7141 1.52035 11.9719 1.77813C12.2297 2.03591 12.3746 2.38544 12.375 2.75V5.5C12.3746 5.86456 12.2297 6.21409 11.9719 6.47187C11.7141 6.72965 11.3646 6.87464 11 6.875ZM2.75 2.75V5.5H11V2.75H2.75Z"
                fill={`${roadmap ? "#FFFFFF" : "#818181"}`}
              />
            </svg>
            <span className="hidden md:block">My Roadmap</span>
          </section>

          {/* 1 to 1 Session */}
          <section
            className={`${
              oneToOne
                ? "bg-[#1E1E1E] text-white"
                : "hover:bg-[#1E1E1E] hover:text-white "
            } cursor-pointer space-x-2 flex items-center`}
            onClick={() => {
              setDashboard(false);
              setProfile(false);
              setFavourites(false);
              setEventCalender(false);
              setMyCourse(false);
              setUploadBadges(false);
              setRoadmap(false);
              setOnetoOne(true);
            }}
          >
            <BiGroup className="text-2xl" />
            <span className="hidden md:block">1 to 1 Session</span>
          </section>
        </div>

        <div className="text-white md:pl-[16rem] pl-[3.5rem] min-h-[91vh]">
          {profile && (
            <div>
              {userData ? (
                <UserProfile
                  name={userData.name}
                  image={session?.user?.image || "/user.jpg"}
                  email={session?.user?.email || userData.email}
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
                <Favourites likedVideo={favouritesVideoData} />
              ) : (
                <div className="h-screen flex justify-center items-center text-3xl font-gilroy">
                  No Liked Videos !
                </div>
              )}
            </div>
          )}
          {eventCalender && <Dashboard />}
          {dashboard && <Dashboard />}
          {roadmap && <Dashboard />}
          {oneToOne && <Dashboard />}
          {
            myCourse && <MyCourses/>
          }
        </div>
      </div>
    </div>
  );
};

export default UserProfilePublic;
