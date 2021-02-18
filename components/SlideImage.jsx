import imageStyle from "../styles/Slideshow.module.css";

const SlideImage = ({ image, isVisible }) => {
  return (
    <img
      src={image.src}
      alt={image.alt}
      className={
        isVisible
          ? imageStyle.image
          : `${imageStyle.image} ${imageStyle.hidden}`
      }
    />
  );
};

export default SlideImage;
