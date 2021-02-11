import { useState, useEffect } from "react";

import Card from "../components/Card";
import CustomHead from "../components/CustomHead";
import SlideImage from "../components/SlideImage";

import cardDetails from "../components/config/indexPageLinks";
import slideDetails from "../components/config/indexSlideImages";

import cardStyle from "../styles/Card.module.css";
import slideStyle from "../styles/Slideshow.module.css";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [visibleSlideImage, setVisibleSlideImage] = useState(
    slideDetails[0].alt
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (counter === slideDetails.length - 1) {
        setCounter(0);
      } else {
        setCounter((counter) => counter + 1);
      }
      setVisibleSlideImage(slideDetails[counter].alt);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [counter]);

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
