import footerStyles from "./Footer.module.scss";

const Footer = () => {
  const christmasFooter = () => {
    const today = new Date();
    const christmas = new Date(today.getFullYear(), 11, 25);
    const oneDay = 1000 * 60 * 60 * 24; //ms*s*h*d
    if (today.getMonth === 11 && today.getDay > 25) {
      christmas.setFullYear(christmas.getFullYear() + 1);
    }
    const daysUntilChristmas = Math.ceil(
      (christmas.getTime() - today.getTime()) / oneDay
    );
    const todayIsChristmas = daysUntilChristmas === 0;

    return todayIsChristmas
      ? `🦌🦌🦌🦌🦌🛷 Merry Christmas! Today is the day! 🦌🦌🦌🦌🦌🛷`
      : `🎄It is only ${daysUntilChristmas} days until Christmas 🎄`;
  };
  const content = christmasFooter();

  return <footer className={footerStyles.main}>{content}</footer>;
};

export default Footer;
