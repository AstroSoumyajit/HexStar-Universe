import React from 'react';
import Navbar from '../components/Navbar';
import SideNav from '../components/SideNav';
import Head from 'next/head';
import {
  FaTelegramPlane,
  FaYoutube,
  FaLinkedin,
  FaDiscord,
  FaInstagramSquare,
} from 'react-icons/fa';
import Footer from '../components/Footer';
import {useState} from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {useEffect} from 'react';
import Link from 'next/link';

const buttonText = [
  {
    key: Date.now (),
    text: 'Students',
  },
  {
    key: Date.now (),
    text: 'Professtional',
  },
  {
    key: Date.now (),
    text: 'Citizen Scientists',
  },
  {
    key: Date.now (),
    text: 'Researcher',
  },
  {
    key: Date.now (),
    text: 'Aerospace Students',
  },
  {
    key: Date.now (),
    text: 'Curious Minds',
  },
  {
    key: Date.now (),
    text: 'Aerospace Industry Experts',
  },
  {
    key: Date.now (),
    text: 'High Powered Rocket Builders',
  },
];

const Event = () => {
  const [open, setOpen] = useState (false);
  const [name, setName] = useState ('');
  const [agree, setAgree] = useState (false);
  const [task1complete, setTask1complete] = useState (false);

  const handleClose = () => {
    setOpen (false);
  };
  const handleClickOpen = () => {
    setOpen (true);
  };

  const agreeHandler = () => {
    setAgree (true);
    setTask1complete(true)
    handleClose ();
  };

  useEffect (
    () => {
      console.log ('name changed to' + name);
    },
    [agree]
  );

  return (
    <div className="bg-[#000] overflow-x-auto">
      <Head>
        <title>HexStar Universe</title>
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <SideNav />
      <Navbar />
      <div className="max-w-[1280px] mx-auto font-sweet_sans_pro z-40">
        <div className="md:ml-16 md:px-12 px-8">
          <div className="grid md:grid-cols-4 items-center justify-items-center py-8 relative z-20">
            <img
              src="/spaceshuttle.png"
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:hidden -z-20"
            />
            <div className="col-span-3 space-y-12">
              <h1 className="font-bank_gothic md:text-[40px] text-[24px] text-center md:text-left text-white leading-tight">
                Kickstart your Rocket Scientist
                journey in less than 1 week
              </h1>
              <h1 className="text-[#A8A4A4] md:text-[24px] text-[14px] text-center md:text-left">
                A Certified Master Class program on Rocketry by ISRO Rocket
                Scientist. Build your knowledge around Rocketry, Space science
                and lot more with a community that is a hub for the Space Tech experts & enthusiasts.
              </h1>
              <div className="w-full text-center flex flex-col space-y-4 items-center">
                <div>
                  <Link href="#task1">
                    <div className="relative">
                      <button className="bg-gradient-to-r from-[#0019F9] to-[#660068] text-white md:text-[23px] text-[11px] px-4 py-3  rounded-[17px] relative z-20">
                        Apply for 100% FREE Preimium <br /> Access
                      </button>
                      <div className="bg-gradient-to-r from-[#0019F9] to-[#660068] absolute inset-0 blur-md rounded-[17px]" />
                    </div>
                  </Link>
                </div>
                <span className="text-white font-bank_gothic text-[16px] md:hidden">
                  OR
                </span>
                <div className="relative max-w-fit md:hidden">
                  <Link href="https://rzp.io/l/RocketryMasterclass">
                    <button className="bg-gradient-to-r from-[#0019F9] to-[#660068] text-white md:text-[23px] text-[16px] px-4 py-3  rounded-[17px] z-20 relative">
                      Register Now
                    </button>
                  </Link>
                  <div className="bg-gradient-to-r from-[#0019F9] to-[#660068] absolute inset-0 blur-md rounded-[17px]" />
                </div>
              </div>

            </div>
            <div className="hidden md:block">
              <img src="/Images/events/spaceshutle.svg" />
            </div>
          </div>
          <div className="py-16 space-y-8">
            <h1 className="text-center w-full md:text-[23px] text-[16px] text-[#7A7A7A]">
              ASSOCIATE PARTNERS
            </h1>
            <div className="flex md:flex-row justify-center md:space-x-16 space-x-4 child:md:w-[20rem] child:w-[10rem]">
              <img src="/Images/collaborators/logo2.svg" />
              <img src="/Images/collaborators/logo3.svg" />
            </div>
          </div>
          <div className="py-16 space-y-8">
            <h1 className="text-center w-full md:text-[23px] text-[16px] text-[#7A7A7A]">
              MEDIA PARTNERS
            </h1>
            <div className="w-full child:md:w-[20rem] child:w-[10rem] child:mx-auto">
              <img src="/Images/collaborators/logo5.svg" />
            </div>
          </div>
          <div className="py-8 space-y-8 w-full text-center">
            <Link href="https://forms.gle/yYderqjbBGQSswAa8">
              <button className="px-6 py-3 rounded-[13px] font-semibold text-[#688794] border border-[#00B2FF]">
                Become a Partner
              </button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 md:py-16 justify-center items-center relative bg-background bg-no-repeat bg-right">
            <h1 className="font-Europa_Gro text-white md:text-[70px] text-[25px] text-center space-y-8 md:space-y-0">
              Who is this<br />
              event for ?
            </h1>
            <div className="eventtag flex flex-col md:flex-row flex-wrap child:my-2 child:mx-4">
              {buttonText.map ((item, i) => {
                return (
                  <button
                    className="border-white border rounded-[12px] px-4 py-3 text-white md:font-bold text-[16px]"
                    key={i}
                  >
                    {item.text}
                  </button>
                );
              })}
            </div>
            <img
              src="Images/events/meteor.svg"
              className="absolute left-0 bottom-5 hidden md:block"
            />
            <img
              src="Images/events/ion_rocket-sharp.svg"
              className="absolute top-16 right-[60%] hidden md:block"
            />
          </div>
          <div className="py-16 w-full child:mx-auto">
            <img src="Images/events/Scholarship.png" />
          </div>

          <div className="py-16 space-y-8">
            <div id="task1">
              <div className="flex justify-between items-center">
                <div className="text-white bg-gradient-to-r from-[#0019F9] to-[#660068] px-4 max-w-fit py-3 rounded-[17px]">
                  Task-1
                </div>
                <h1 className="font-bank_gothic md:text-[30px] text-[16px] text-white leading-tight">
                  {agree && name}
                </h1>
              </div>
              <div className="flex md:flex-row flex-col justify-evenly pt-8 space-y-4 md:space-y-0">
                <h1 className="text-white md:text-right md:text-[30px] text-[16px] flex items-center gap-4 h-fit">
                  <FaTelegramPlane className="text-white" /><span>Name :</span>
                </h1>
                <div className="space-y-6 md:w-[35vw] ">
                  <input
                    onChange={e => setName (e.target.value)}
                    type="text"
                    placeholder="Please Enter Your Name"
                    className="bg-transparent border border-zinc-400 w-full text-white placeholder:text-zinc-500 px-4 py-3 focus:outline-hidden rounded-md"
                  />
                  <div className="space-y-6">
                    <div className="flex justify-between items-center">
                      <FaTelegramPlane className="text-white text-4xl" />
                      <FaYoutube className="text-[#FF0000] text-4xl" />
                      <div className="flex justify-center items-center space-x-3">
                        <Link href="https://www.youtube.com/channel/UCxiuN3r_ibdAfHqlBBKuTwQ">
                          <button className="w-[10rem] text-white bg-gradient-to-r from-[#FF0000] to-[#BD009F] px-4 py-2 rounded-[17px]">
                            {agree ? 'SUBSCRIBED' : 'SUBSCRIBE'}
                          </button>
                        </Link>
                        {agree &&
                          <img src="/greentick.svg" className="pl-3 w-8" />}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <FaTelegramPlane className="text-white text-4xl" />
                      <FaLinkedin className="text-[#0A66C2] text-4xl" />
                      <div className="flex justify-center items-center space-x-3">
                        <Link href="https://www.linkedin.com/company/hex-star-universe/">
                          <button className="w-[10rem] text-white bg-gradient-to-r from-[#000AFF] to-[#06A5FF] px-4 py-2 rounded-[17px]">
                            {agree ? 'FOLLOWED' : 'FOLLOW'}
                          </button>
                        </Link>
                        {agree &&
                          <img src="/greentick.svg" className="pl-3 w-8" />}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <FaTelegramPlane className="text-white text-4xl" />
                      <FaDiscord className="text-[#5865F2] text-4xl" />
                      <div className="flex justify-center items-center space-x-3">
                        <Link href="https://discord.com/invite/XxuJMhAMaD">
                          <button className=" w-[10rem] text-white bg-gradient-to-r from-[#4541FF] to-[#BD00FF] px-4 py-2 rounded-[17px]">
                            {agree ? 'JOINED' : 'JOIN'}
                          </button>
                        </Link>
                        {agree &&
                          <img src="/greentick.svg" className="pl-3 w-8" />}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <FaTelegramPlane className="text-white text-4xl" />
                      <img
                        src="/Images/icons/instagram.svg"
                        className="w-[30px]"
                      />
                      <div className="flex justify-center items-center space-x-3">
                        <Link href="https://www.instagram.com/hexstar_universe/">
                          <button className="w-[10rem] text-white bg-gradient-to-r from-[#F80077] to-[#F80000] px-4 py-2 rounded-[17px]">
                            {agree ? 'FOLLOWED' : 'FOLLOW'}
                          </button>
                        </Link>
                        {agree &&
                          <img src="/greentick.svg" className="pl-3 w-8" />}
                      </div>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      className={`text-white border border-white px-6 py-3 rounded-[18px] ${agree && 'bg-[#10CE00] border-0'}`}
                      onClick={handleClickOpen}
                    >
                      {agree ? 'Confirmed' : 'confirm'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="text-white bg-gradient-to-r from-[#0019F9] to-[#660068] px-4 max-w-fit py-3 rounded-[17px]">
                Task-2
              </div>
              <img
                src="/Images/events/available.png"
                className={`ml-16 w-3/4 md:w-fit ${task1complete && 'hidden'}`}
              />
                <div className="relative py-12 text-center" onClick={()=> agree ? window.location.href = 'https://forms.gle/Vxv8gp7MmGSM3ZKN7' : setTask1complete(false) }>
                  <button className="bg-gradient-to-r from-[#0019F9] to-[#660068] text-white md:text-[23px] text-[11px] px-4 py-3  rounded-[17px] relative z-20">
                    Click to enter Task -2
                  </button>
                  <div className="bg-gradient-to-r from-[#0019F9] to-[#660068] absolute inset-0 blur-md rounded-[17px] max-w-fit" />
                </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="text-black"
      >
        <DialogTitle id="alert-dialog-title">
          Have You Subscribed, followed, Joined?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Connecting with our social platforms help you to keep updated with our upcoming events.
          </DialogContentText>
        </DialogContent>
        <DialogActions className="space-x-8">
          <button
            onClick={() => {
              setAgree (false);
              handleClose ();
            }}
          >
            Disagree
          </button>
          <button onClick={agreeHandler} autoFocus>
            Agree
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Event;
