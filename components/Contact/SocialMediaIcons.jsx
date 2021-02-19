import contactStyle from "../../styles/Contact.module.css";

const SocialMediaIcons = () => {
  return (
    <>
      <a
        href="https://www.instagram.com/evergreen_christmas_trees/"
        target="_blank"
      >
        <img
          src="/logos/instalogo.png"
          alt="instagram logo"
          className={contactStyle.logo}
        />
      </a>
      <a
        href="https://www.messenger.com/t/evergreenchrissytrees"
        target="_blank"
      >
        <img
          src="/logos/messengerLogo.png"
          alt="messenger logo"
          className={contactStyle.logo}
        />
      </a>
      <a href="https://www.facebook.com/evergreenchrissytrees/" target="_blank">
        <img
          src="/logos/fbLogo.png"
          alt="facebook logo"
          className={contactStyle.logo}
        />
      </a>
    </>
  );
};

export default SocialMediaIcons;
