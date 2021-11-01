import React from "react";
import "./button.styles.scss";


const Button = ({
  btnText,
  outline,
  onClick,
}) => {
  return (
    <div className={`button${outline ? " outline" : ""}`} onClick={onClick}>
      {btnText}
    </div>
  );
};

export default Button;
