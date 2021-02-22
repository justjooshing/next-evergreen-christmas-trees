import Link from "next/link";

import cardStyles from "../../styles/Card.module.css";

const Card = ({ card }) => {
  const { link_src, fig_caption, img_src, img_alt } = card;
  return (
    <Link href={link_src}>
      <a>
        <div className={cardStyles.card}>
          <img src={img_src} alt={img_alt} className={cardStyles.image} />
          <figcaption className={cardStyles.figcaption}>
            {fig_caption}
          </figcaption>
        </div>
      </a>
    </Link>
  );
};

export default Card;
