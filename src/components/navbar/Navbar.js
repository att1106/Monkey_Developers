import React, { useState } from "react";
import { Link } from "gatsby";
import ToggleBtn from "../toggleBtn/ToggleBtn";
import logo from "../../images/icon.png";
import { navbarLinks } from "../../constants/pageLinks";
import "./navbar.styles.scss";
import SubLink from "../subLink/SubLink";
import Sidebar from "../sidebar/Sidebar";
import { useScrollNavbar } from "../../hooks/useScrollNavbar";

const Navbar = ({
  homeLink = "/",
  showLogo = false,
  hideByScroll = true
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  console.log("isOpen", isOpen);

  const { visible } = useScrollNavbar();

  return (
    <>
      <nav
        className={`navbar${isOpen ? " open" : ""}${
          !hideByScroll || visible || isOpen ? "" : " notshow"
        }`}
      >
        <div className="navbar__header">
          {showLogo && (
            <Link to={homeLink}>
              <img src={logo} alt="company logo" />
            </Link>
          )}
          <ToggleBtn isOpen={isOpen} toggle={toggleSidebar} />
        </div>
        <div className="navbar__body">
          <div className="navbar__links">
            {navbarLinks.map((link, index) => {
              return (
                <div key={index} className="navbar__link--wrapper">
                  <Link to={link.url} className="navbar__link">
                    {link.text}
                  </Link>
                  {link.subLinks && (
                    <div className="navbar__sublink">
                      <SubLink subLinks={link.subLinks}></SubLink>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </nav>
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        navbarLinks={navbarLinks}
      />
    </>
  );
};

export default Navbar;
