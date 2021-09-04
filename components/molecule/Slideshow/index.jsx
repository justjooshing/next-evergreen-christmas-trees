import { useEffect, useState } from "react";

import SlideImage from "../../atom/SlideImage";

import style from "./Slideshow.module.scss";

const Slideshow = ({ slides }) => {
  const [slideCounter, setSlideCounter] = useState(0);
  const [visibleSlideImage, setVisibleSlideImage] = useState(
    slides[slideCounter].alt
  );

  useEffect(() => {
    setVisibleSlideImage(slides[slideCounter].alt);
    const interval = setInterval(() => {
      setSlideCounter(
        slideCounter === slides.length - 1 ? 0 : slideCounter + 1
      );
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [slideCounter, slides]);

  return (
    <section className={style.slideshow}>
      {slides.map((image) => (
        <SlideImage
          image={image}
          key={image.alt}
          isVisible={visibleSlideImage === image.alt}
        />
      ))}
    </section>
  );
};

export default Slideshow;
