import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { Button, IconButton } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
const SubmissionCard = () => {
  const handleAcceptOrDecline = () => {};

  return (
    <div
      className={`rounded-md bg-black p-5 flex items-center justify-between`}
    >
      <div className={`space-y-2`}>
        <div className={`flex items-center gap-2`}>
          <span>Git hub:</span>
          <div className="flex items-center gap-2 text-[#c24dd0]">
            <OpenInNewIcon />
            <a
              href="https://github.com/upendra0609"
              target="_blank"
              rel="noreferrer"
            >
              code-with-me
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <p>Submission Time: 2024-12-12:12:12:12 </p>
          <p className="text-gray-400"></p>
        </div>
      </div>
      <div className="">
        {true ? (
          <div className="flex gap-5">
            <div className="text-green-500">
              <IconButton
                color="success"
                onClick={() => handleAcceptOrDecline("ACCEPT")}
              >
                <CheckIcon />
              </IconButton>
              <IconButton
                onClick={() => handleAcceptOrDecline("DECLINE")}
                color="error"
              >
                <CloseSharpIcon />
              </IconButton>
            </div>
          </div>
        ) : (
          <Button
            size="small"
            variant="outlined"
            color={true ? "success" : "error"}
          >
            Accept
          </Button>
        )}
      </div>
    </div>
  );
};

export default SubmissionCard;
