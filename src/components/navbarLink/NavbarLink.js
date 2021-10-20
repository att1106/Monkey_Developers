import { Link } from 'gatsby'
import React from 'react'
import Accordion from '../accordion/Accordion';
import "./navbarLink.styles.scss";

const NavbarLink = ({ navbarLinks, toggleSidebar }) => {

    return (
        <div className="navbar__links-modal">
            {navbarLinks.map((link, index) => {
                return (
                    link.subLinks ?
                        <Accordion
                            key={index}
                            noPadding
                            indented
                            renderHeader={() =>
                                <Link to={link.url} className="navbar__link-modal" onClick={toggleSidebar}>
                                    {link.text}
                                </Link>}
                            renderContent={() =>
                                <div className="navbar__sublinks-modal">
                                    {link.subLinks.map((subLink, subIndex) =>
                                        <Link key={subIndex} className="navbar__sublink-modal" to={subLink.url} onClick={toggleSidebar}>{subLink.text}</Link>
                                    )}
                                </div>
                            }
                        /> :
                        <Link key={index} className="navbar__link-modal" to={link.url} onClick={toggleSidebar}>{link.text}</Link>


                )
            })}
        </div>
    )
}

export default NavbarLink;
