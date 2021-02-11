import Image from "next/image";
import imageStyle from "../styles/Slideshow.module.css";

const SlideImage = ({ image, isVisible }) => {
  const className = isVisible
    ? imageStyle.image
    : `${imageStyle.image} ${imageStyle.hidden}`;
  return <img src={image.src} alt={image.alt} className={className} />;
};

export default SlideImage;
