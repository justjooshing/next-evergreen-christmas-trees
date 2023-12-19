import Image from "next/image";
import Link from "next/link";

import Nav from "../Nav";

import headerStyles from "./Header.module.scss";

const HeaderWrapper = () => {
  return (
    <div className={headerStyles.title_wrapper}>
      <h1 className={headerStyles.title}>
        <Link href="/">Evergreen Christmas Trees</Link>
      </h1>
      {/* Need to wrap NextJS image component in div */}
      <div className={headerStyles.image}>
        <Image
          src="/logos/logo.png"
          alt="Christmas Tree"
          height={70}
          width={47}
        />
      </div>
    </div>
  );
};

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
