import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import { Link } from "gatsby";
import SidebarWrapper from "../fixedSidebar/SidebarWrapper";
import "./layout.styles.scss";

const Layout = ({ children }) => {
  return (
    <>
      <SidebarWrapper />
      <div className="company-logo_container">
        {/* <Link className="company-logo" to="/">
          <img src={logo} alt="logo" />
        </Link> */}
      </div>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
