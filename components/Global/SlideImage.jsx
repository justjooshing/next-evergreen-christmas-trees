import { useState, useEffect } from "react";
import Image from "next/image";

import slideStyle from "../../styles/Slideshow.module.css";

const SlideImage = ({ image, isVisible }) => {
  // useState and useEffect here are to load the not-yet visible
  // images only once the CSS has loaded (and is hiding them)
  const [hiddenImages, updateHiddenImages] = useState(null);

  useEffect(() => {
    updateHiddenImages(
      <div className={` ${slideStyle.image} ${slideStyle.hidden}`}>
        <Image src={image.src} alt={image.alt} layout="fill" />
        <figcaption className={`${slideStyle.caption} ${slideStyle.hidden}`}>
          {image.caption}
        </figcaption>
      </div>
    );
  }, []);

  return isVisible ? (
    <div className={` ${slideStyle.image} ${slideStyle.hidden}`}>
      <Image src={image.src} alt={image.alt} layout="fill" />
      <figcaption className={slideStyle.caption}>{image.caption}</figcaption>
    </div>
  ) : (
    hiddenImages
  );
};

export default SlideImage;
