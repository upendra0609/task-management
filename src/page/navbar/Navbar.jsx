import React from "react";
import { Avatar } from "@mui/material";
import style from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div
      className={`${style.container} z-10 sticky left-0 right-0 top-0 py-2 px-5 lg:px-10 flex justify-between items-center`}
    >
      <p className="font-bold text-lg">Task Manager</p>
      <div className="flex items-center gap-5">
        <p>CodeWIthMe</p>
        <Avatar sx={{ backgroundColor: "#c24dd0" }}>U</Avatar>
      </div>
    </div>
  );
};

export default Navbar;
