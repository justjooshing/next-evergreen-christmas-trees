import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import { connectToDatabase } from "../util/mongodb";

import Announcements from "../components/Index/Announcements";
import Card from "../components/Index/Card";
import CustomHead from "../components/Global/CustomHead";
import SlideImage from "../components/Global/SlideImage";

import cardDetails from "../components/config/indexPageLinks";
import slideDetails from "../components/config/indexSlideImages";
import indexIntro from "../components/config/indexIntro";

import cardStyle from "../styles/Card.module.css";
import slideStyle from "../styles/Slideshow.module.css";
import indexStyles from "../styles/index.module.css";
import Alerts from "../components/Index/Alerts";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const getAnnouncements = await db.collection("message").find({}).toArray();
  const announcements = JSON.parse(JSON.stringify(getAnnouncements));

  const getAlert = await db.collection("alert").find({}).toArray();
  const alerts = JSON.parse(JSON.stringify(getAlert));

  return {
    props: { announcements, alerts },
  };
}

export default function Home({ announcements, alerts }) {
  const pageName = "Home";
  const dispatch = useDispatch();

  const [slideCounter, setSlideCounter] = useState(0);
  const [visibleSlideImage, setVisibleSlideImage] = useState(
    slideDetails[0].alt
  );

  useEffect(() => {
    dispatch(setPage(pageName));
  }, []);

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
      <CustomHead pageName={pageName} />
      {alerts.length > 0 && <Alerts alerts={alerts} />}
      <section className={indexStyles.introduction}>
        {indexIntro.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </section>
      {announcements.some((announcement) => announcement.visibility) && (
        <Announcements announcements={announcements} />
      )}
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
