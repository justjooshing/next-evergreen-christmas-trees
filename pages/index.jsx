import { useState, useEffect } from "react";

import Card from "../components/Card";
import CustomHead from "../components/CustomHead";
import SlideImage from "../components/SlideImage";

import cardDetails from "../components/config/indexPageLinks";
import slideDetails from "../components/config/indexSlideImages";

import cardStyle from "../styles/Card.module.css";
import slideStyle from "../styles/Slideshow.module.css";

export default function Home() {
  const [slideCounter, setSlideCounter] = useState(0);
  const [visibleSlideImage, setVisibleSlideImage] = useState(
    slideDetails[0].alt
  );

  useEffect(() => {
    setVisibleSlideImage(slideDetails[slideCounter].alt);
    const interval = setInterval(() => {
      if (slideCounter === slideDetails.length - 1) {
        setSlideCounter(0);
      } else {
        setSlideCounter((slideCounter) => slideCounter + 1);
      }
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [slideCounter]);

  return (
    <>
      <CustomHead pageName="Home" />
      <h1>Home Page</h1>
      <section className={slideStyle.slideshow}>
        {slideDetails.map((image) => (
          <SlideImage
            image={image}
            key={image.alt}
            isVisible={visibleSlideImage === image.alt}
          />
        ))}
      </section>
      <section className={cardStyle.card_grid_wrapper}>
        {cardDetails.map((card) => (
          <Card card={card} key={card.fig_caption} />
        ))}
      </section>
    </>
  );
}
