import Link from "next/link";
import Nav from "./Nav";

import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.main}>
      <h1 className={headerStyles.title}>
        <Link href="/">
          <a>Evergreen Christmas Trees</a>
        </Link>
      </h1>
      <img src="./icons/Tree Logo.png" alt="Christmas Tree" id="header-image" />
      {/* Evergreen Christmas Trees title and logo */}
      <Nav />
    </header>
  );
};

export default Header;
