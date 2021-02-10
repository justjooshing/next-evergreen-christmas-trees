import NavLinks from "./NavLinks";
import { paths } from "./config/paths";

import navStyles from "../styles/Nav.module.css";

const Nav = () => (
  <nav className={navStyles.nav}>
    <ul>
      {Object.entries(paths).map((link) => {
        return <NavLinks link={link} key={link[0]} />;
      })}
    </ul>
  </nav>
);

export default Nav;
