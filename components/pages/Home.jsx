// Components
import Alerts from "../atom/Alerts";
import Announcements from "../atom/Announcements";
import Cards from "../molecule/Card";
import Slideshow from "../molecule/Slideshow";

import indexIntro from "../config/indexIntro";
import indexImages from "../config/indexSlideImages";

// Styles
import styles from "./index.module.scss";

const Home = ({ announcements, alerts }) => {
  return (
    <>
      {alerts.length > 0 && <Alerts alerts={alerts} />}
      <section className={styles.introduction}>
        {indexIntro.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </section>
      {announcements.some((announcement) => announcement.visibility) && (
        <Announcements announcements={announcements} />
      )}
      <Slideshow slides={indexImages} />
      <Cards />
    </>
  );
};

export default Home;
