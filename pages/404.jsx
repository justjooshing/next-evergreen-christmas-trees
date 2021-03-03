import Link from "next/link";
import Image from "next/image";

import CustomHead from "../components/Global/CustomHead";

import custom404Styles from "../styles/404.module.css";

export default function custom404() {
  const pageName = "404 - Not Found";
  return (
    <>
      <CustomHead pageName={pageName} />
      <div className={custom404Styles.introduction}>
        <h1>It looks like you've got lost.</h1>
        <p>404 - Page not found</p>
        <Image
          src="/404.jpg"
          alt="Red flag amongst christmas trees"
          height={760}
          width={500}
        />
        <Link href="/">
          <button className={custom404Styles.button}>Go back home</button>
        </Link>
      </div>
    </>
  );
}
