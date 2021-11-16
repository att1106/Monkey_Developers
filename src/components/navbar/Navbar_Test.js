import React, { useState, useEffect } from "react";

import {useScrollNavbar} from "../../hooks/useScrollNavbar";

const Navbar = () => {



  const {visible} = useScrollNavbar()

  const navbarStyles = {
    position: "fixed",
    height: "60px",
    width: "100%",
    zIndex: "1000",
    backgroundColor: "grey",
    textAlign: "center",
    transition: "ease 0.6s",
    top: "0",
  };

//   // new function:
//   const handleScroll = debounce(() => {
//     // find current scroll position
//     const currentScrollPos = window.pageYOffset;
//     console.log(currentScrollPos);

//     // set state based on location info (explained in more detail below)
//     setVisible(
//       (prevScrollPos > currentScrollPos &&
//         prevScrollPos - currentScrollPos > 40) ||
//         currentScrollPos < 30 //||
//     );

//     // set state to new scroll position
//     setPrevScrollPos(currentScrollPos);
//   }, 100);

//   // new useEffect:
//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [prevScrollPos, visible, handleScroll]);

  return (
    // updated styling:
    <div style={{ ...navbarStyles, top: visible ? "0" : "-60px" }}>
      Some Company Inc.
    </div>
  );
};

export default Navbar;
