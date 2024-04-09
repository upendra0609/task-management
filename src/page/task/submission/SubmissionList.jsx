import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import SubmissionCard from "./SubmissionCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const submissions = [1, 2, 3];

const SubmissionList = ({ handleClose, open }) => {
  return (
    <div className={""}>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <div className="space-y-2">
              {submissions.length != 0 ? (
                <div className="space-y-2">
                  <SubmissionCard />
                  <SubmissionCard />
                  <SubmissionCard />
                </div>
              ) : (
                <div className="text-center">No Submission found</div>
              )}
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default SubmissionList;
