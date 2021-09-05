import Link from "next/link";
import { useState } from "react";
import { useSelector } from "react-redux";

import { paths } from "../../../constants";

import navStyles from "./Nav.module.scss";

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

const Nav = () => {
  const NavLinks = ({ link }) => {
    const page = useSelector((state) => state.page);
    const [key, value] = link;
    const selectedPage = page === key;
    return (
      <Link passHref href={value}>
        <li className={selectedPage ? navStyles.selected : null}>{key}</li>
      </Link>
    );
  };

  const navItems = Object.entries(paths).map((link) => (
    <NavLinks link={link} key={link[0]} />
  ));

  return (
    <>
      {/* Inside here we're either displaying the nav items in the header
        or displaying the nav items when the hamburger menu is clicked */}
      <nav className={navStyles.nav}>
        <ul>{navItems}</ul>
      </nav>
      <Hamburger navItems={navItems} />
    </>
  );
};

export default Nav;
