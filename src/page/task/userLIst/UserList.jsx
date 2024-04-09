import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import style from "./UserList.module.css";
import {
  Avatar,
  Button,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

const styles = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  outline: "none",
  p: 2,
};

const tasks = [1, 2, 3, 4];

const UserList = ({ handleClose, open }) => {
  return (
    <div className={""}>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={styles}>
            {tasks.map((item, index) => (
              <>
                <div
                  key={index}
                  className="flex items-center justify-between w-full"
                >
                  <div className="">
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src="">C</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={"code with me"}
                        secondary={"@code with me"}
                      ></ListItemText>
                    </ListItem>
                  </div>
                  <div>
                    <Button className={`${style.customeButton}`}>Select</Button>
                  </div>
                </div>
                {index != tasks.length - 1 && <Divider variant="inset" />}
              </>
            ))}
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default UserList;
