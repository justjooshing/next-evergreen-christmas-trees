import NavLinks from "./NavLinks";
import { paths } from "./paths";

import navStyles from "../styles/Nav.module.css";

const Nav = () => {
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
