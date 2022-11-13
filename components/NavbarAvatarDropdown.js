import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Avatar, IconButton } from "@mui/material";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const NavbarAvatarDropDown = ({ img, name }) => {
  const [anchorEl, setAnchorEl] = useState(null);
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
          sx={{ width: "45px", height: "45px" }}
          className=" cursor-pointer border-2 border-[#ffffff] hidden lg:flex"
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
        <div className="flex flex-col p-4 bg-[#272727] -my-2 text-white">
          <Link href={"/profile/admin/[]"} as={`/profile/admin/`} passHref>
            <MenuItem onClick={handleClose} className=" font-gilroy">
              Profile
            </MenuItem>
          </Link>
          {/* <MenuItem onClick={handleClose} className=" font-nunito">Your Projects</MenuItem> */}
          <MenuItem
            onClick={() => {
              handleClose();
              signOut();
              window.sessionStorage.removeItem("userId");
            }}
            className=" font-nunito"
          >
            Sign Out
          </MenuItem>
        </div>
      </Menu>
    </div>
  );
};

export default NavbarAvatarDropDown;
