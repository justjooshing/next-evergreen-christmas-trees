import { indexIntro, treeImages } from "../../constants";
import Alerts from "../atom/Alerts";
import Announcements from "../atom/Announcements";
import Cards from "../molecule/Card";
import Slideshow from "../molecule/Slideshow";

import styles from "./index.module.scss";

const Home = ({ announcements, alerts }) => (
  <>
    {!!alerts.length && <Alerts alerts={alerts} />}
    <section className={styles.introduction}>
      {indexIntro.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </section>
    {!!announcements.length && <Announcements announcements={announcements} />}
    <Slideshow slides={treeImages} />
    <Cards />
  </>
);

export default Home;
