import React from "react";
import { FaBeer } from "react-icons/fa";
import "./iconPlusText.styles.scss";

const IconPlusText = ({ mainText = "Main Text", subText = "Sub Text", icon = <FaBeer />, iconLeft=false }) => {
    return (
        <div className="icon-plus-text">
            {iconLeft && <div className="icon__box">
                {icon}
            </div>}
            <div className={`text__box ${iconLeft ? "" : "right"}`}>
                <span className="text__box--main">{mainText}</span>
                <span className="text__box--sub">{subText}</span>
            </div>
            {!iconLeft && <div className="icon__box">
                {icon}
            </div>}
        </div>
    )
}

export default IconPlusText
