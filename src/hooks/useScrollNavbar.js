import { useState, useEffect } from "react";
import { debounce } from "../components/utilities/helpers";

function useScrollNavbar() {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.pageYOffset;
    // set state based on location info (explained in more detail below)
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 40) ||
        currentScrollPos < 30 //||
    );
    // set state to new scroll position
    setPrevScrollPos(currentScrollPos);
  }, 100);
  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return { visible };
}

export { useScrollNavbar };
