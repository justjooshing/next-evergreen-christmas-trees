import Link from "next/link";
import Image from "next/image";

import cardStyles from "../styles/Card.module.css";

const Card = ({ card }) => {
  const { link_src, fig_caption, img_src, img_alt } = card;
  return (
    <div>
      <Link href={link_src}>
        <a>
          <div className={cardStyles.card}>
            {/* need to fix these cards still, the images are too big  */}
            <div className={cardStyles.image}>
              <Image src={img_src} alt={img_alt} height={300} width={400} />
            </div>
            <figcaption className={cardStyles.figcaption}>
              {fig_caption}
            </figcaption>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default Card;
