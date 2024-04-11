import React, { useState } from "react";
import style from "./TaskCard.module.css";
import { IconButton } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import UserList from "../userLIst/UserList";
import SubmissionList from "../submission/SubmissionList";
import EditTaskForm from "../EditTaskForm/EditTaskForm";

const role = "ADMIN";

const TaskCard = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // This is the state to control the UserList popover visibility
  const [openUserList, setOpenUserList] = useState(false);
  // Handler to close the UserList popover
  const handleCloeUserList = () => {
    setOpenUserList(false);
  };
  // Handler to open the UserList popover
  const handleOpenUserList = () => {
    setOpenUserList(true);
    handleClose(); // Close the menu
    console.log("handleOpenUserList");
  };

  // This is the state to control the EditTaskForm popover visibility
  const [openEditTaskForm, setopenEditTaskForm] = useState(false);
  // Handler to close the EditTaskForm popover
  const handleCloeEditTaskForm = () => {
    setopenEditTaskForm(false);
  };
  // Handler to open the EditTaskForm popover
  const handleOpenEditTaskForm = () => {
    setopenEditTaskForm(true);
    handleClose(); // Close the menu
    console.log("handleopenSubmissionList");
  };

  // Handler to delete the task
  const handleDeleteTask = () => {
    console.log("handleDeleteTask");
  };

  // This is the state to control the SubmissionList popover visibility
  const [openSubmissionList, setopenSubmissionList] = useState(false);
  // Handler to close the SubmissionList popover
  const handleCloeSubmissionList = () => {
    setopenSubmissionList(false);
  };
  // Handler to open the SubmissionList popover
  const handleOpenSubmissionList = () => {
    setopenSubmissionList(true);
    handleClose(); // Close the menu
    console.log("handleopenSubmissionList");
  };

  return (
    <div>
      <div className="card lg:flex justify-between">
        <div className="lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]">
          <div className="">
            <img
              className="lg:w[7rem] lg:h[7rem] object-cover"
              src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
              alt=""
            />
          </div>
          <div className="space-y-5">
            <div className="space-y-2">
              <h1 className="font-bold text-lg">Car Rental Website</h1>
              <p className="text-gray-500 text-sm">
                Use Latest Frameworks and technology to make this website
              </p>
            </div>
            <div className="flex flex-grow-2 flex-wrap lg:flex-nowrap items-center justify-center gap-2">
              {[1, 2, 3, 4, 5].map((item) => (
                <span
                  className={`py-1 px-5 rounded-full ${style.techStack}`}
                  key={item}
                >
                  Angular
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="">
          <IconButton
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            {role === "ADMIN" ? (
              <div>
                <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
                <MenuItem onClick={handleOpenSubmissionList}>
                  See Submissions
                </MenuItem>
                <MenuItem onClick={handleOpenEditTaskForm}>Edit</MenuItem>
                <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
              </div>
            ) : (
              <></>
            )}
          </Menu>
        </div>
      </div>
      {/* if openUserList is true show UserList */}
      <UserList open={openUserList} handleClose={handleCloeUserList} />
      <SubmissionList
        open={openSubmissionList}
        handleClose={handleCloeSubmissionList}
      />
      <EditTaskForm
        open={openEditTaskForm}
        handleClose={handleCloeEditTaskForm}
      />
    </div>
  );
};

export default TaskCard;
