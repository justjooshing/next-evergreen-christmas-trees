import { useState, useEffect } from "react";
import Image from "next/image";

import slideStyle from "../../styles/Slideshow.module.css";

const SlideImage = ({ image, isVisible }) => {
  // useState and useEffect here are to load the not-yet visible
  // images only once the CSS has loaded (and is hiding them)
  const [hiddenImages, updateHiddenImages] = useState(null);

  useEffect(() => {
    updateHiddenImages(
      <>
        <img
          srcSet={image.srcset}
          src={image.src}
          alt={image.alt}
          className={` ${slideStyle.image} ${slideStyle.hidden}`}
        />
        <figcaption className={`${slideStyle.caption} ${slideStyle.hidden}`}>
          {image.caption}
        </figcaption>
      </>
    );
  }, []);

  return isVisible ? (
    <>
      <img
        alt={image.alt}
        className={slideStyle.image}
        srcSet={image.srcset}
        src={image.src}
      />
      <figcaption className={slideStyle.caption}>{image.caption}</figcaption>
    </>
  ) : (
    hiddenImages
  );
};

export default SlideImage;
