import { useState, useEffect } from "react";

import style from "./SlideImage.module.scss";

const SlideImage = ({ image, isVisible }) => {
  // useState and useEffect here are to load the not-yet visible
  // images only once the CSS has loaded (and is hiding them)
  const [hiddenImages, updateHiddenImages] = useState(null);

  useEffect(() => {
    updateHiddenImages(
      <>
        <img
          sizes="70w"
          srcSet={image.srcset}
          src={image.src}
          alt={image.alt}
          className={` ${style.image} ${style.hidden}`}
        />
        <figcaption className={`${style.caption} ${style.hidden}`}>
          {image.caption}
        </figcaption>
      </>
    );
  }, [image]);

  return isVisible ? (
    <>
      <img
        sizes="70w"
        alt={image.alt}
        srcSet={image.srcset}
        src={image.src}
        className={style.image}
      />
      <figcaption className={style.caption}>{image.caption}</figcaption>
    </>
  ) : (
    hiddenImages
  );
};

export default SlideImage;
