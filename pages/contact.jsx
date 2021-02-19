import CustomHead from "../components/CustomHead";

import ContactDetails from "../components/ContactDetails";
import MapWrapper from "../components/MapWrapper";
import OpeningHours from "../components/OpeningHours";

import contactStyle from "../styles/Contact.module.css";

const contact = () => {
  return (
    <>
      <CustomHead pageName="Contact" />
      <section className={contactStyle.main}>
        <MapWrapper />
        <div>
          <OpeningHours />
          <ContactDetails />
        </div>
      </section>
    </>
  );
};

export default contact;
