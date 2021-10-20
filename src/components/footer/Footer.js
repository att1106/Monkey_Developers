import { Link } from "gatsby";
import React from "react";
import { footerLinks } from "../../constants/pageLinks";
import { contactLinks } from "../../constants/contactLinks";
import "./footer.styles.scss";

const Footer = ({ footerInformtation = "By AD Creators" }) => {
    return (
        <footer>
            <div className="footer__body">
                <div className="footer__social-media">
                    {contactLinks.map((item, index) => {
                        let Icon = item.icon;
                        return <Link className="footer__social-media--item" key={index} to={item.url} onClick={item.onClick}><Icon /></Link>
                    })}
                </div>
                <div className="footer__links">
                    {footerLinks.map((item, index) =>
                        <Link className="footer__link" key={index} to={item.url}>{item.text}</Link>)}
                </div>
                <div className="footer__information">
                    <p>{footerInformtation} {new Date().getFullYear()}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
