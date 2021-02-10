import Link from "next/link";
import Image from "next/image";
import Nav from "./Nav";

import headerStyles from "../styles/Header.module.css";

const Header = () => (
  <header className={headerStyles.main}>
    <div className={headerStyles.title_wrapper}>
      <h1 className={headerStyles.title}>
        <Link href="/">
          <a>Evergreen Christmas Trees</a>
        </Link>
      </h1>
      <Image src="/logo.png" alt="Christmas Tree" height={70} width={50} />
    </div>
    {/* Evergreen Christmas Trees title and logo */}
    <Nav />
  </header>
);

export default Header;
