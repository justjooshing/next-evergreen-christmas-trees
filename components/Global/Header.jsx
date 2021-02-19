import HeaderWrapper from "./HeaderWrapper";
import Nav from "./Nav";

import headerStyles from "../../styles/Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.main}>
      {/* Logo and H1 */}
      <HeaderWrapper />
      <Nav />
    </header>
  );
};

export default Header;
