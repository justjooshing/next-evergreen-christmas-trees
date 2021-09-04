import ContactDetails from "../atom/ContactDetails";
import MapWrapper from "../atom/MapWrapper";
import OpeningHours from "../atom/OpeningHours";
import SocialMediaIcons from "../atom/SocialMediaIcons";

import style from "./Contact.module.scss";

const Contact = () => (
  <section className={style.main}>
    <MapWrapper />
    <div>
      <OpeningHours />
      <SocialMediaIcons />
      <ContactDetails />
    </div>
  </section>
);

export default Contact;
