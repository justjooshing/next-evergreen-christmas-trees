import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import CustomHead from "../components/Global/CustomHead";

import ContactDetails from "../components/Contact/ContactDetails";
import MapWrapper from "../components/Contact/MapWrapper";
import OpeningHours from "../components/Contact/OpeningHours";
import SocialMediaIcons from "../components/Contact/SocialMediaIcons";

import contactStyle from "../styles/Contact.module.css";

const Contact = () => {
  const pageName = "Contact";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
  }, [dispatch]);

  return (
    <>
      <CustomHead pageName={pageName} />
      <section className={contactStyle.main}>
        <MapWrapper />
        <div>
          <OpeningHours />
          <SocialMediaIcons />
          <ContactDetails />
        </div>
      </section>
    </>
  );
};

export default Contact;
