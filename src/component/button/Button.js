import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Button = ({title}) => {
  return (
    <div>
      <button className="btn btn-active hover:bg-[#1B5E1F] bg-[#237D31] text-white">
         {title}<ArrowForwardIcon />
      </button>
    </div>
  );
};

export default Button;
