import { useState, useEffect } from "react";

import navStyles from "../styles/Nav.module.css";

const Hamburger = ({ navItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return showMenu ? (
    <nav className={navStyles.fsMenu} onClick={handleClick}>
      <ul>{navItems}</ul>
    </nav>
  ) : (
    <nav className={navStyles.hamburger} onClick={handleClick}>
      <span></span>
      <span></span>
      <span></span>
    </nav>
  );
};

export default Hamburger;
