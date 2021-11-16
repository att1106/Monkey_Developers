import React from "react";
import Button from "../button/Button";
import { Link } from "gatsby";

import "./sidebarWrapper.styles.scss";

const SidebarWrapper = ({ buttonText, buttonLink }) => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-wrapper__about-container">
        <h1>Modern.</h1>
        <h1>Schnell.</h1>
        <h1>Sicher.</h1>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua.
        </p>

        <Button
          btnText={<Link to={buttonLink}>{buttonText}</Link>}
          // btnText={<Link to="/contact">Erstellt mir eine Website!</Link>}
          // btnText={<a href="mailto:me@me.com">Erstellt mir eine Website!</a>}
        />
      </div>
    </div>
  );
};

export default SidebarWrapper;
