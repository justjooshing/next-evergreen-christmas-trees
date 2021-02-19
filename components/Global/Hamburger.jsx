import { useState } from "react";

// import HeaderWrapper from "./HeaderWrapper";

import navStyles from "../../styles/Nav.module.css";

const Hamburger = ({ navItems }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return showMenu ? (
    <nav className={navStyles.fsMenu} onClick={handleClick}>
      {/* Header here in case we want to show it on the menu */}
      {/* <HeaderWrapper /> */}
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
