import { lastSaturday, openingHours } from "../config/openingHours";

import contactStyle from "../../styles/Contact.module.css";

const OpeningHours = () => {
  return (
    <>
      <p>
        This year we are open from November {lastSaturday}th until December 23rd
      </p>
      <h3>Opening Hours</h3>
      {openingHours.map((dayRange) => (
        <div key={dayRange.days} className={contactStyle.hours}>
          <p>{dayRange.days}:</p>
          <p>{dayRange.hours}</p>
        </div>
      ))}
      <p>Outside these times and dates please contact us for an appointment</p>
    </>
  );
};

export default OpeningHours;
