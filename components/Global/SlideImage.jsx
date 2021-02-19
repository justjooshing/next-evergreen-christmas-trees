import slideStyle from "../../styles/Slideshow.module.css";

const SlideImage = ({ children, image, isVisible }) => {
  return (
    <>
      <img
        src={image.src}
        alt={image.alt}
        className={
          isVisible
            ? slideStyle.image
            : `${slideStyle.image} ${slideStyle.hidden}`
        }
      />
      <figcaption
        className={
          isVisible
            ? slideStyle.caption
            : `${slideStyle.caption} ${slideStyle.hidden}`
        }
      >
        {image.caption}
      </figcaption>
    </>
  );
};

export default SlideImage;
