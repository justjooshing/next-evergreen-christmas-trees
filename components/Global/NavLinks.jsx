import Link from "next/link";

import navStyles from "../../styles/Nav.module.css";

const NavLinks = ({ link, whichPage }) => {
  const [key, value] = link;
  const selectedPage = whichPage === key;
  return (
    <Link href={value}>
      <li className={selectedPage ? navStyles.selected : null}>{key}</li>
    </Link>
  );
};

export default NavLinks;
