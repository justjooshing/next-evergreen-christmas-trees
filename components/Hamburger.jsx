import { useState, useEffect } from "react";

import navStyles from "../styles/Nav.module.css";

const Hamburger = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };
  useEffect(() => {
    console.log(showMenu);
  }, [showMenu]);

  return (
    <nav className={navStyles.hamburger} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  );
};

export default Hamburger;
