import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={headerStyles.main}>
      {/* Logo and H1 */}
      <div className={headerStyles.title_wrapper}>
        <h1 className={headerStyles.title}>
          <Link href="/">
            <a>Evergreen Christmas Trees</a>
          </Link>
        </h1>
        {/* Need to wrap NextJS image component in div */}
        <div className={headerStyles.image}>
          <Image
            src="/logo.png"
            alt="Christmas Tree"
            height={70}
            width={47.5}
            priority
            layout="fixed"
          />
        </div>
      </div>
      {/* Either nav or hamburger will show depending on screen width */}
      <Nav />
    </header>
  );
};

export default Header;
