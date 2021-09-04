import style from "./SocialMediaIcons.module.scss";

const SocialMediaIcons = () => (
  <>
    <a
      href="https://www.instagram.com/evergreen_christmas_trees/"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="/logos/instalogo.png"
        alt="instagram logo"
        className={style.logo}
      />
    </a>
    <a
      href="https://www.messenger.com/t/evergreenchrissytrees"
      target="_blank"
      rel="noreferrer"
    >
      <img
        src="/logos/messengerLogo.png"
        alt="messenger logo"
        className={style.logo}
      />
    </a>
    <a
      href="https://www.facebook.com/evergreenchrissytrees/"
      target="_blank"
      rel="noreferrer"
    >
      <img src="/logos/fbLogo.png" alt="facebook logo" className={style.logo} />
    </a>
  </>
);

export default SocialMediaIcons;
