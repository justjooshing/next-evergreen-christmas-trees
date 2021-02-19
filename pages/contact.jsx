import CustomHead from "../components/Global/CustomHead";

import ContactDetails from "../components/Contact/ContactDetails";
import MapWrapper from "../components/Contact/MapWrapper";
import OpeningHours from "../components/Contact/OpeningHours";
import SocialMediaIcons from "../components/Contact/SocialMediaIcons";

import contactStyle from "../styles/Contact.module.css";

const contact = () => {
  return (
    <>
      <CustomHead pageName="Contact" />
      <section className={contactStyle.main}>
        <MapWrapper />
        <div>
          {/* Still need to put in social media links */}
          <OpeningHours />
          <SocialMediaIcons />
          <ContactDetails />
        </div>
      </section>
    </>
  );
};

export default contact;
