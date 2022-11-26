import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, IconButton } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { useLogin } from "../context/LoginContext";
import { useSession } from "next-auth/react";
import { BiUserCircle } from "react-icons/bi";
import { MdExitToApp, MdVerified } from "react-icons/md";
import { useVerifyModal } from "../context/VerifyCertificateModal";

const NavbarAvatarDropDown = ({ img, name }) => {
  const { data: session } = useSession();
  const [anchorEl, setAnchorEl] = useState(null);
  const { userData, setUserData } = useLogin();
  const { openVerify, setOpenVerify } = useVerifyModal();
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={(event) => {
          handleClick(event);
        }}
      >
        <Avatar
          src={img}
          alt={name}
          className=" cursor-pointer border-2 border-[#ffffff] hidden lg:flex w-12 h-12 "
        />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="flex flex-col p-4 bg-[#272727] -my-2 text-white space-y-4">
          <Link
            href={`profile/${
              userData?.id || session?.user?.uid || session?.user?.id
            }`}
            passHref
          >
            <div
              onClick={handleClose}
              className="flex justify-start items-center font-gilroy cursor-pointer hover:scale-105"
            >
              <BiUserCircle className="text-white text-3xl mr-4" />
              Profile
            </div>
          </Link>
          <div
            onClick={() => {
              setOpenVerify(true);
              handleClose();
            }}
            className="flex justify-start items-center font-gilroy cursor-pointer hover:scale-105"
          >
            <MdVerified className="text-white text-3xl mr-4" /> Verify
            Certificate
          </div>
          <div
            onClick={() => {
              if (session) {
                signOut();
              } else {
                window.sessionStorage.removeItem("user_id");
                setUserData(null);
                window.location.reload();
              }
              handleClose();
            }}
            className="flex justify-start items-center font-gilroy cursor-pointer hover:scale-105"
          >
            <MdExitToApp className="text-white text-3xl mr-4" />
            Sign Out
          </div>
        </div>
      </Menu>
    </div>
  );
};

export default NavbarAvatarDropDown;
