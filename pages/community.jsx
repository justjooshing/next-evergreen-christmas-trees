import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import CustomHead from "../components/Global/CustomHead";
import SlideImage from "../components/Global/SlideImage";
import { slideImages, schoolList } from "../components/config/schools";

import slideStyle from "../styles/Slideshow.module.css";
import communityStyle from "../styles/Community.module.css";

const community = () => {
  const pageName = "Community";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
  }, []);

  const [slideCounter, setSlideCounter] = useState(0);
  const [visibleSlideImage, setVisibleSlideImage] = useState(
    slideImages[0].alt
  );

  useEffect(() => {
    setVisibleSlideImage(slideImages[slideCounter].alt);
    const interval = setInterval(() => {
      if (slideCounter === slideImages.length - 1) {
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
    <section className={communityStyle.main}>
      <CustomHead pageName={pageName} />
      <p>
        We love being involved with and supporting our local community. We
        partner with our local schools and community groups to spread joy each
        Christmas. Here are some photos of our trees at local schools.
      </p>
      <section className={slideStyle.slideshow}>
        {slideImages.map((image) => (
          <SlideImage
            image={image}
            key={image.alt}
            isVisible={visibleSlideImage === image.alt}
          />
        ))}
      </section>
      <section className={communityStyle.school_list}>
        <h3>Schools and organisations we support:</h3>
        <ul>
          {schoolList.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default community;
