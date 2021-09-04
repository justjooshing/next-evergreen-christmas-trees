import Link from "next/link";
import Image from "next/image";

import styles from "./NotFound.module.scss";

const NotFound = () => {
  const pageText = "404 - Page not found";
  const lostHeader = "You're lost!";
  const lostSubheader = "You've taken a wrong turn in the Enchanted Forest";
  return (
    <div className={styles.introduction}>
      <h2>{lostHeader}</h2>
      <h4>{lostSubheader}</h4>
      <p>{pageText}</p>
      <Image
        src="/404.jpg"
        alt="Red flag amongst christmas trees"
        height={760}
        width={500}
      />
      <Link passHref href="/">
        <button className={styles.button}>Go back home</button>
      </Link>
    </div>
  );
};

export default NotFound;
