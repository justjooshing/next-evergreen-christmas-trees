export default [
  // Width and height are here for the nextjs image component
  {
    src: "/slideshow_images/index/IMG_5249/IMG_5249_200.jpg",
    alt: "Evergreen trees fence and sign",
    width: 2457,
    height: 1755,
    srcset: [200, 444, 622, 766, 914, 1044, 1158, 1284, 1352, 1400]
      .map(
        (size) =>
          `/slideshow_images/index/IMG_5249/IMG_5249_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/index/IMG_0454/IMG_0454_200.jpg",
    alt: "Christmas tree image",
    width: 3024,
    height: 4032,
    srcset: [200, 841, 1261, 1616, 1982, 2292, 2391, 2555, 2772, 2800]
      .map(
        (size) =>
          `/slideshow_images/index/IMG_0454/IMG_0454_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/index/IMG_5253/IMG_5253_200.JPG",
    alt: "Three christmas trees",
    width: 2925,
    height: 4096,
    srcset: [200, 465, 641, 813, 928, 1054, 1176, 1296, 1356, 1400]
      .map(
        (size) =>
          `/slideshow_images/index/IMG_5253/IMG_5253_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/index/IMG_5503/IMG_5503_200.JPG",
    alt: "Man with flag next to tree",
    width: 720,
    height: 960,
    srcset: [200, 399, 545, 670, 720]
      .map(
        (size) =>
          `/slideshow_images/index/IMG_5503/IMG_5503_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/index/IMG_5592/IMG_5592_200.JPG",
    alt: "Christmas tree in trailer",
    width: 4096,
    height: 2925,
    srcset: [200, 495, 693, 865, 1002, 1146, 1233, 1342, 1373, 1400]
      .map(
        (size) =>
          `/slideshow_images/index/IMG_5592/IMG_5592_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/index/IMG_7235/IMG_7235_200.JPG",
    alt: "Christmas tree cluster",
    width: 960,
    height: 720,
    srcset: [200, 387, 535, 657, 781, 890, 960]
      .map(
        (size) =>
          `/slideshow_images/index/IMG_7235/IMG_7235_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/index/IMG_7241/IMG_7241_200.JPG",
    alt: "Netting christmas tree",
    width: 960,
    height: 720,
    srcset: [200, 468, 611, 748, 873, 960]
      .map(
        (size) =>
          `/slideshow_images/index/IMG_7241/IMG_7241_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/index/IMG_7581/IMG_7581_200.jpg",
    alt: "Christmas tree sunrise fence",
    width: 3024,
    height: 4032,
    srcset: [200, 454, 647, 759, 887, 1031, 1144, 1255, 1373, 1400]
      .map(
        (size) =>
          `/slideshow_images/index/IMG_7581/IMG_7581_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/index/Rainbow/Rainbow_200.jpg",
    alt: "Christmas tree forest",
    width: 1440,
    height: 1298,
    srcset: [200, 462, 620, 762, 889, 1006, 1146, 1264, 1299, 1400]
      .map(
        (size) => `/slideshow_images/index/Rainbow/Rainbow_${size}.jpg ${size}w`
      )
      .join(", "),
  },
];
