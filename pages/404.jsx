import Link from "next/link";
import Image from "next/image";

import CustomHead from "../components/Global/CustomHead";

import custom404Styles from "../styles/404.module.css";

export default function custom404() {
  const pageName = "404 - Not Found";
  const pageText = "404 - Page not found";
  const lostHeader = "You're lost!";
  const lostText = "You've taken a wrong turn in the Enchanted Forest";

  return (
    <>
      <CustomHead pageName={pageName} />
      <div className={custom404Styles.introduction}>
        <h2>{lostHeader}</h2>
        <h4>{lostText}</h4>
        <p>{pageText}</p>
        <Image
          src="/404.jpg"
          alt="Red flag amongst christmas trees"
          height={760}
          width={500}
        />
        <Link passHref href="/">
          <button className={custom404Styles.button}>Go back home</button>
        </Link>
      </div>
    </>
  );
}
