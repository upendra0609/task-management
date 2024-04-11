import React, { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar } from "@mui/material";
import style from "./Navbar.module.css";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${style.container} z-10 sticky left-0 right-0 top-0 py-2 px-5 lg:px-10 flex justify-between items-center`}
    >
      <div className={`flex items-center gap-2`}>
        <div className="lg:hidden">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          {isMenuOpen && (
            <Sidebar setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
          )}
        </div>
        <p className="font-bold text-lg">Task Manager</p>
      </div>
      <div className="flex items-center gap-5">
        <p>CodeWIthMe</p>
        <Avatar sx={{ backgroundColor: "#c24dd0" }}>U</Avatar>
      </div>
    </div>
  );
};

export default Navbar;
