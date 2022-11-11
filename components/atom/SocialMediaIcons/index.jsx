import style from "./SocialMediaIcons.module.scss";

const icons = {
  instagram: {
    href: "https://www.instagram.com/evergreen_christmas_trees/",
    src: "/logos/instalogo.png",
    name: "Instagram",
  },
  messenger: {
    href: "https://www.messenger.com/t/evergreenchrissytrees",
    src: "/logos/messengerLogo.png",
    name: "Messenger",
  },
  fb: {
    href: "https://www.facebook.com/evergreenchrissytrees/",
    src: "/logos/fbLogo.png",
    name: "Facebook",
  },
};

const SocialMediaIcons = () =>
  Object.values(icons).map(({ href, src, name }) => (
    <a key={name} href={href} target="_blank" rel="noreferrer">
      <img src={src} alt={`${name} logo`} className={style.logo} />
    </a>
  ));

export default SocialMediaIcons;
