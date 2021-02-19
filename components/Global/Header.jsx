import HeaderWrapper from "./HeaderWrapper";
import Nav from "./Nav";

import headerStyles from "../../styles/Header.module.css";

const Header = ({ whichPage }) => {
  return (
    <header className={headerStyles.main}>
      {/* Logo and H1 */}
      <HeaderWrapper />
      <Nav whichPage={whichPage} />
    </header>
  );
};

export default Header;
