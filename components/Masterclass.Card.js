import { Key } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCalendar4 } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { HiStatusOnline } from "react-icons/hi";
import { MdOutlineKeyboardVoice } from "react-icons/md";
// import {loadScript} from 'load-script'
// var loadScript = require('load-script')
const MasterclassCard = ({ MasterClassData, title, image, key, gradient1, gradient2, gradient, id }) => {

  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false);
  // const [MasterClassData, setMasterclassData] = useState([]);
  const [waiting, setWaiting] = useState(true);
  const [clickedMasterclass, setClickedMasterclass] = useState(-1);

  //get master card data
  // const getMasterclassData = React.useCallback(async () => {
  //   let temp = [];
  //   return onSnapshot(query(collection(db, "masterclass")), (snapshot) => {
  //     temp = [];
  //     snapshot.forEach((doc) => {
  //       temp.push({ ...doc.data(), id: doc.id });
  //     });
  //     setMasterclassData(temp);
  //   });
  // }, []);

  // 
  async function displayRazorpay() {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const result = await axios.post("http://localhost:3000/api/razorpay");

    if (!result) {
      alert("Server error. Are you online?");
      return;
    }

    const { amount, id: order_id, currency } = result.data;

    const options = {
      key: process.env.RAZORPAY_KEY, // Enter the Key ID generated from the Dashboard
      amount: amount.toString(),
      currency: currency,
      name: "Soumya Corp.",
      description: "Test Transaction",
      image: "/Images/logoNew.png",
      order_id: order_id,
      handler: async function (response) {
        const data = {
          orderCreationId: order_id,
          razorpayPaymentId: response.razorpay_payment_id,
          razorpayOrderId: response.razorpay_order_id,
          razorpaySignature: response.razorpay_signature,
        };
        const result = await axios.post(
          "http://localhost:3000/api/success",
          data
        );

        alert(result.data.msg);
      },
      theme: {
        color: "#61dafb",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }
  const apllyHandler = () => {
    alert("hi: " + id)
    console.log("mm: " + JSON.stringify(MasterClassData))
    setOpen(true);
    displayRazorpay()
  }

  return (
    <div className="bg-[#161616] pt-2 pb-4 px-2 rounded-md space-y-6 font-gilroy min-w-[20rem]">
      <div className="relative">
        <img src={image} />
        <h1 className="font-bold text-xl text-white absolute bottom-2 left-2">
          {title}
        </h1>
        <span
          className={`bg-gradient-to-r ${gradient === 0 && "from-[#299F00] to-[#299F00]"
            } ${gradient === 2 && "from-[#EB00FF] to-[#6100FF]"} ${gradient === 1 && "from-[#FE5900] to-[#FE5900]"
            }  ${gradient === 3 && "from-[#EB00FF] to-[#6100FF]"} ${gradient === 4 && "from-[#3300FF] to-[#3300FF]"
            } text-white font-semibold flex justify-center rounded-full px-2 py-1 items-center text-xs w-fit absolute top-2 right-2`}
        >
          <HiStatusOnline size={15} className="mr-2" /> Live Class
        </span>
      </div>
      <div className="p-2 space-y-4 text-white">
        <div className="flex justify-start space-x-3 items-center">
          <AiOutlineClockCircle size={25} />
          <h1>3 Days certified masterclasses</h1>
        </div>
        <div className="flex justify-start space-x-3 items-center">
          <img src="/Images/masterclassNew/tick.svg" className="w-[25px]" />
          <h1>No Pre-Requisites</h1>
        </div>
        <div className="flex justify-start space-x-3 items-center">
          <img src="/Images/masterclassNew/group.svg" className="w-[25px]" />
          <h1>Expert guidance</h1>
        </div>
      </div>
      <div className="text-center">
        <button onClick={apllyHandler}
          className={`font-bold text-xl bg-gradient-to-r ${gradient === 0 && "from-[#299F00] to-[#299F00]"
            } ${gradient === 2 && "from-[#EB00FF] to-[#6100FF]"} ${gradient === 1 && "from-[#FE5900] to-[#FE5900]"
            }  ${gradient === 3 && "from-[#EB00FF] to-[#6100FF]"} ${gradient === 4 && "from-[#3300FF] to-[#3300FF]"
            }    w-11/12 text-white py-2 rounded-md `}
        >
          Apply Now
        </button>
      </div>

     
      <Modal
        open={open}
        onClose={() => {
          setOpen(false);
          // setClickedMasterclass(-1);
          setWaiting(true);
        }}
        aria-describedby="alert-dialog-slide-description"
      >
        <div className="absolute outline-0 top-1/2 lg:w-[25vw] md:w-[33vw] sm:w-[40vw] w-[80vw]  left-1/2 -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="backdrop-blur-md bg-[#0000]/30 p-8 flex justify-center items-center border-[#747474] border rounded-md">
            {!waiting ? (
              <h1 className="bg-[#34ad16e0] px-4 py-2 text-white font-gilroy rounded-md mx-auto text-xl">
                Already in Waiting List
              </h1>
            ) : (
              <h1
                className="bg-[#0038FF] px-4 py-2 text-white font-gilroy rounded-md mx-auto text-xl"
                onClick={() => addUsertoWaitingList(clickedMasterclass)}
              >
                Join Waitinglist
              </h1>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default MasterclassCard;
