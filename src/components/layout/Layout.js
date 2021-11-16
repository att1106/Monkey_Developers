import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar_Test";
import { Link } from "gatsby";
import SidebarWrapper from "../fixedSidebar/SidebarWrapper";
import "./layout.styles.scss";

const Layout = ({ buttonLink, buttonText, children }) => {
  console.log(buttonLink);
  console.log(buttonText);
  return (
    <> 
      <SidebarWrapper buttonText={buttonText} buttonLink={buttonLink} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
