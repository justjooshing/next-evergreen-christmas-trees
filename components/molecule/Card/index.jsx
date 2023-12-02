import Image from "next/image";
import Link from "next/link";

import { pageLinks } from "../../../constants";

import styles from "./Card.module.scss";

const Card = ({ card: { link_src, fig_caption, img_src, img_alt } }) => {
  return (
    <Link href={link_src}>
      <div className={styles.card}>
        <Image
          className={styles.image}
          src={img_src}
          alt={img_alt}
          height={300}
          width={400}
        />
        <figcaption className={styles.figcaption}>{fig_caption}</figcaption>
      </div>
    </Link>
  );
};

const Cards = () => (
  <section className={styles.card_grid_wrapper}>
    {pageLinks.map((card) => (
      <Card card={card} key={card.fig_caption} />
    ))}
  </section>
);

export default Cards;
