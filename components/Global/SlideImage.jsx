import slideStyle from "../../styles/Slideshow.module.css";

const SlideImage = ({ image, isVisible }) => {
  return isVisible ? (
    <>
      <img src={image.src} alt={image.alt} className={slideStyle.image} />
      <figcaption className={slideStyle.caption}>{image.caption}</figcaption>
    </>
  ) : (
    <>
      <img
        src={image.src}
        alt={image.alt}
        className={`${slideStyle.image} ${slideStyle.hidden}`}
      />
      <figcaption className={`${slideStyle.caption} ${slideStyle.hidden}`}>
        {image.caption}
      </figcaption>
    </>
  );
};

export default SlideImage;
