import React from "react";
import { Link } from "gatsby";
import { contactLinks } from "../../constants/contactLinks";
import "./contactBanner.styles.scss";

const ContactBanner = () => {
    return (
        <div className="contact-banner">
            {contactLinks.map((item, index) => {
                let Icon = item.icon;
                return <Link className="contact-banner__item" key={index} to={item.url} onClick={item.onClick} ><Icon /></Link>
            })}
        </div>
    )
}

export default ContactBanner;
