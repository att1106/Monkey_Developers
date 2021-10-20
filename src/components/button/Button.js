import React from "react";
import "./button.styles.scss";


const Button = ({
  btnText = "Button",
  outline,
  onClick = () => console.log("Clicked!"),
}) => {
  return (
    <div className={`button${outline ? " outline" : ""}`} onClick={onClick}>
      {btnText}
    </div>
  );
};

export default Button;
