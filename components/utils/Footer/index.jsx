import { staleTimes } from "../../../constants/api";

import footerStyles from "./Footer.module.scss";

const Footer = () => {
  const christmasFooter = () => {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);
    const oneDay = staleTimes.DAYS_1; //ms*s*h*d
    if (today.getMonth === 11 && today.getDay > 25) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const daysUntilChristmas = () => {
      const amount = Math.ceil(
        (christmas.getTime() - today.getTime()) / oneDay
      );
      return amount < 0 ? Math.abs(amount) + 365 : amount; // will be off for leap years
    };
    const todayIsChristmas = daysUntilChristmas() === 0;

    return todayIsChristmas
      ? `🦌🦌🦌🦌🦌🛷 Merry Christmas! Today is the day! 🦌🦌🦌🦌🦌🛷`
      : `🎄It is only ${daysUntilChristmas()} days until Christmas 🎄`;
  };
  const content = christmasFooter();

  return <footer className={footerStyles.main}>{content}</footer>;
};

export default Footer;
