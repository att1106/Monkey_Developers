import React from "react";
import { FaBeer } from "react-icons/fa";
import "./iconPlusText.styles.scss";

const IconPlusText = ({ mainText = "Main Text", subText = "Sub Text", icon = <FaBeer /> }) => {
    return (
        <div className="icon-plus-text">
            <div className="icon__box">
                {icon}
            </div>
            <div className="text__box">
                <span className="text__box--main">{mainText}</span>
                <span className="text__box--sub">{subText}</span>
            </div>
        </div>
    )
}

export default IconPlusText
