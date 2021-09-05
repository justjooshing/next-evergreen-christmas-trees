import Image from "next/image";
import Link from "next/link";

import { pageLinks } from "../../../constants";

import styles from "./Card.module.scss";

const Card = ({ card }) => {
  const { link_src, fig_caption, img_src, img_alt } = card;
  return (
    <Link href={link_src}>
      <a>
        <div className={styles.card}>
          <div className={styles.image}>
            <Image src={img_src} alt={img_alt} height={300} width={400} />
          </div>
          <figcaption className={styles.figcaption}>{fig_caption}</figcaption>
        </div>
      </a>
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
