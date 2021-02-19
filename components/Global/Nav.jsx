import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";

import { paths } from "../config/paths";

import navStyles from "../../styles/Nav.module.css";

const Nav = ({ whichPage }) => {
  const navItems = Object.entries(paths).map((link) => {
    return <NavLinks link={link} key={link[0]} whichPage={whichPage} />;
  });

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
