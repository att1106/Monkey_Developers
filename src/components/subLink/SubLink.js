import { Link } from "gatsby";
import React from "react";
import "./subLink.styles.scss";

const SubLink = ({ subLinks }) => {
    return (
        <div className="sub-link__box">
            {subLinks.map((subLink, index) =>
                <Link key={index} to={subLink.url} className="sub-link__link">{subLink.text}</Link>
            )}
        </div>
    )
}

export default SubLink
