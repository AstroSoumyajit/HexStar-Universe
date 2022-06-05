import React from 'react';
import {useRouter} from 'next/router';
import SideNav from '../components/SideNav';
import Navbar from '../components/Navbar';
import {webinarData} from '../dummydb';
import Webinars from '../components/Webinars';
import {useState} from 'react';
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const VideoOpen = ({webinarData}) => {
  const router = useRouter (); 
  const title = router.query.videoId;

  const webinar = webinarData.find (obj => obj.title === title);
  const [shareLinkState, setshareLinkState] = useState ('');

  function youtube_parser (url) {
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match (regExp);
    return match && match[7].length == 11 ? match[7] : false;
  }
  const shareLink = 'https://www.youtube.com/watch?v='.concat(
    youtube_parser (webinar.linkEmbed)
  );

  const [open, setOpen] = React.useState (false);

  const handleClick = () => {
    setOpen (true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen (false);
  };

  return (
    <div className="bg-[#000000] overflow-x-hidden">
      <SideNav />
      <Navbar />
      <div className="md:ml-16 md:px-12 px-8 text-white md:pt-24 pt-16">
        <div className="space-y-4 my-8">
          <h1 className="text-2xl font-medium font-sweet_sans_pro">
            {webinar.title}
          </h1>
          <div className="flex md:flex-row flex-col md:justify-between justify-center h-full md:space-x-12 space-y-4 md:space-y-0 md:items-center">
            <iframe
              className="w-full md:h-[60vh] h-full rounded-xl"
              src={webinar.linkEmbed}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="md:w-3/4 space-y-8">
              <div className="rounded-xl bg-[#2C2E40] border border-[#5B5B5B] md:w-fit w-full flex flex-row items-center justify-between pl-4">
                <h1 className="md:text-md">
                  {shareLink.length > 30
                    ? shareLink.substring (0, 20).concat ('...')
                    : shareLink}
                </h1>
                <Stack>
                  <button
                    className="text-[#00E0FF] px-4 py-2 font-sweet_sans_promd:text-md"
                    value={shareLink}
                    onClick={e => {
                      setshareLinkState (e.target.value);
                      navigator.clipboard.writeText (shareLinkState);
                      handleClick()
                    }}
                  >
                    Share Now
                  </button>
                  <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                  >
                    <Alert
                      onClose={handleClose}
                      severity="success"
                      sx={{width: '100%', backgroundColor:'#4e9a51', color:'white'}}
                    >
                      Link copied successfully
                    </Alert>
                  </Snackbar>
                </Stack>
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
        <Webinars webinarData={webinarData} title="Previous Webinars" />
      </div>
    </div>
  );
};

export default VideoOpen;

export async function getStaticPaths () {
  const paths = webinarData.map (data => {
    return {
      params: {videoId: `${data.title}`},
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps () {
  return {
    props: {
      webinarData,
    },
  };
}
