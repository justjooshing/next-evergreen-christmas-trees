// import { useState, useEffect } from "react";
import NavLinks from "./NavLinks";
import { paths } from "./config/paths";

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
  //WIP for tabbed menu instead of hamburger menu
  // const [width, setWidth] = useState();
  // const [height, setHeight] = useState();

  // useEffect(() => {
  //   setWidth(window.innerWidth);
  //   setHeight(window.innerHeight);
  // });
  // console.log(width);

  // const navPosition = width < 700 ? "tabbed" : "nav";

  return (
    <nav className={navStyles.nav}>
      <ul>
        {Object.entries(paths).map((link) => {
          return <NavLinks link={link} key={link[0]} />;
        })}
      </ul>
    </nav>
  );
};

export default Nav;
