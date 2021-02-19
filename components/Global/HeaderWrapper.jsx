import Link from "next/link";
import Image from "next/image";

import headerStyles from "../../styles/Header.module.css";

const HeaderWrapper = () => {
  return (
    <div className={headerStyles.title_wrapper}>
      <h1 className={headerStyles.title}>
        <Link href="/">
          <a>Evergreen Christmas Trees</a>
        </Link>
      </h1>
      {/* Need to wrap NextJS image component in div */}
      <div className={headerStyles.image}>
        <Image
          src="/logos/logo.png"
          alt="Christmas Tree"
          height={70}
          width={47.5}
          layout="fixed"
        />
      </div>
    </div>
  );
};

export default HeaderWrapper;
