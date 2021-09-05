import { schoolImages } from "../../constants";
import Slideshow from "../molecule/Slideshow";
import SchoolList from "../atom/SchoolList";

import style from "./Community.module.scss";

const Community = () => {
  return (
    <section className={style.main}>
      <p>
        We love being involved with and supporting our local community. We
        partner with our local schools and community groups to spread joy each
        Christmas. Here are some photos of our trees at local schools.
      </p>
      <Slideshow slides={schoolImages} />
      <SchoolList />
    </section>
  );
};

export default Community;
