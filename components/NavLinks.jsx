import Link from "next/link";

const NavLinks = ({ link }) => {
  const [key, value] = link;
  return (
    <li>
      <Link href={value}>{key}</Link>
    </li>
  );
};

export default NavLinks;
