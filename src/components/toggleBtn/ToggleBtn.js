import React from "react";
import { AiOutlineAlignRight, AiOutlineClose } from "react-icons/ai";
import "./toggleBtn.styles.scss";

const ToggleBtn = ({ isOpen, toggle }) => {
  return (
    <>
      <button type="button" className="toggle-btn" onClick={toggle}>
        {isOpen ? <AiOutlineClose /> : <AiOutlineAlignRight />}
      </button>
    </>
  );
};

export default ToggleBtn;
