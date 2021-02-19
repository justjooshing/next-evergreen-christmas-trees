import Link from "next/link";
import { useSelector } from "react-redux";

import navStyles from "../../styles/Nav.module.css";

const NavLinks = ({ link }) => {
  const page = useSelector((state) => state.page);
  const [key, value] = link;
  const selectedPage = page === key;
  return (
    <Link href={value}>
      <li className={selectedPage ? navStyles.selected : null}>{key}</li>
    </Link>
  );
};

export default NavLinks;
