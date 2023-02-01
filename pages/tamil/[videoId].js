import React from "react";
import { useRouter } from "next/router";
import SideNav from "../../components/SideNav";
import Navbar from "../../components/Navbar";
import { webinarData } from "../../dummydb";
import Webinars from "../../components/Webinars";
import { useState } from "react";
import BoostButton from "../../components/BoostButton";
import { BsWhatsapp, BsLinkedin, BsTwitter } from "react-icons/bs";
import {
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import Head from "next/head";

const VideoOpen = ({ englishWebinar }) => {
  const router = useRouter();
  const title = router.query.videoId;

  const webinar = webinarData.find((obj) => obj.title === title);
  const [shareLinkState, setshareLinkState] = useState("");

  const shareLink = "https://www.youtube.com/watch?v=".concat(webinar.videoID);

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <div className="bg-[#000000] overflow-x-hidden">
      <Head>
        <title>HexStar Universe</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <SideNav />
      <Navbar />
      <div className="md:ml-16 md:px-12 px-8 text-white md:pt-24 pt-16">
        <div className="space-y-4 my-8">
          <h1 className="text-2xl font-medium font-sweet_sans_pro">
            {webinar.title}
          </h1>
          <div className="grid md:grid-cols-2 grid-cols-1 h-full md:space-x-12 space-y-4 md:space-y-0 md:items-center">
            <iframe
              className="w-full md:h-[60vh] h-[15rem] rounded-xl"
              src={webinar.linkEmbed}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className=" space-y-8">
              <div className="flex md:flex-row flex-col  items-center justify-start md:space-x-4 space-y-4 md:space-y-0">
                <h1
                  className="md:text-md rounded-lg bg-[#2C2E40] border border-[#5B5B5B] px-6 py-3 noselect"
                  onDoubleClick={() => {
                    navigator.clipboard.writeText(shareLink);
                    alert("Link copied");
                  }}
                >
                  {shareLink.length > 30
                    ? shareLink.substring(0, 25).concat("...")
                    : shareLink}
                </h1>
                <div className="flex space-x-2">
                  <LinkedinShareButton url={shareLink}>
                    <span className="flex items-center justify-center space-x-1 bg-transparent border border-[#5B5B5B] px-2 py-3 rounded-lg">
                      <BsLinkedin className="text-2xl" />
                      <h1>Share</h1>
                    </span>
                  </LinkedinShareButton>
                  <WhatsappShareButton url={shareLink}>
                    <span className="flex items-center justify-center space-x-1 bg-transparent border border-[#5B5B5B] px-2 py-3 rounded-lg">
                      <BsWhatsapp className="text-2xl" />
                      <h1>Share</h1>
                    </span>
                  </WhatsappShareButton>
                  <TwitterShareButton url={shareLink}>
                    <span className="flex items-center justify-center space-x-1 bg-transparent border border-[#5B5B5B] px-2 py-3 rounded-lg">
                      <BsTwitter className="text-2xl" />
                      <h1>Share</h1>
                    </span>
                  </TwitterShareButton>
                </div>
              </div>
              <hr className="h-1 text-[#383838]" />
              <div className="flex flex-start items-center space-x-8">
                <div className="space-y-4">
                  <h1 className="font-sweet_sans_pro tracking-wider">
                    Speaker
                  </h1>
                  <img src={webinar.speakerImage} />
                </div>
                <h1 className="text-[#7B7A7A] font-sweet_sans_pro">
                  {webinar.speaker}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <Webinars title="Previous Webinars" />
      </div>
      <div className="text-center w-full md:ml-16 md:px-12 px-8">
        <img
          src="/Images/icons/back.svg"
          alt="back"
          onClick={() => router.back()}
          className="m-auto w-20 cursor-pointer"
        />
      </div>
      <BoostButton />
    </div>
  );
};

export default VideoOpen;

export async function getStaticPaths() {
  const englishWebinar = webinarData.filter(
    (data) => data.language == "tamil"
  );
  const paths = englishWebinar.map((data) => {
    return {
      params: { videoId: `${data.title}` },
    };
  });

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
