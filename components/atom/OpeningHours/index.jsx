import { openingHours } from "../../../constants";
import { lastSaturday } from "../../../helpers";

import style from "./OpeningHours.module.scss";

const OpeningHours = () => {
  return (
    <>
      <p>
        This year we are open {lastSaturday}th Nov - 23rd Dec or until sold out
      </p>
      <h3>Opening Hours</h3>
      {openingHours.map((dayRange) => (
        <div key={dayRange.days} className={style.hours}>
          <p>{dayRange.days}:</p>
          <p>{dayRange.hours}</p>
        </div>
      ))}
      <p>Outside these times and dates please contact us for an appointment</p>
    </>
  );
};

export default OpeningHours;
