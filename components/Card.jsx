import Link from "next/link";
import Image from "next/image";

import cardStyles from "../styles/Card.module.css";

const Card = ({ card }) => {
  const { link_src, fig_caption, img_src, img_alt } = card;
  return (
    <div className={cardStyles.card}>
      <Link href={link_src}>
        <a>
          <Image
            src={img_src}
            alt={img_alt}
            height={300}
            width={400}
            className={cardStyles.image}
          />
          <figcaption className={cardStyles.figcaption}>
            {fig_caption}
          </figcaption>
        </a>
      </Link>
    </div>
  );
};

export default Card;
