import { useState, useEffect } from "react";

import slideStyle from "../../styles/Slideshow.module.css";

const SlideImage = ({ image, isVisible }) => {
  const [hiddenImages, updateHiddenImages] = useState(null);

  useEffect(() => {
    updateHiddenImages(
      <>
        <img
          src={image.src}
          alt={image.alt}
          className={` ${slideStyle.image} ${slideStyle.hidden}`}
        />
        <figcaption className={`${slideStyle.caption} ${slideStyle.hidden}`}>
          {image.caption}
        </figcaption>
      </>
    );
  }, [image]);

  return isVisible ? (
    <>
      <img src={image.src} alt={image.alt} className={slideStyle.image} />
      <figcaption className={slideStyle.caption}>{image.caption}</figcaption>
    </>
  ) : (
    hiddenImages
  );
};

export default SlideImage;
