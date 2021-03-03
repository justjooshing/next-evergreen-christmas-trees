export const slideImages = [
  {
    src:
      "/slideshow_images/community/Cornish_college2020/Cornish_college2020_200.jpg",
    alt:
      "Photo of christmas tree at Cornish College, given by Evergreen Christmas Trees",
    caption: "Cornish College - 2020 tree",
    srcset: [200, 313, 408, 567, 624, 630, 769, 830, 850, 864]
      .map(
        (size) =>
          `/slideshow_images/community/Cornish_college2020/Cornish_college2020_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/community/Nepean_school2020_200.jpg",
    alt:
      "Photo of christmas tree at Nepean School, given by Evergreen Christmas Trees",
    caption: "Nepean School - 2020 tree",
    srcset: [200, 365, 490, 643, 752, 841, 922, 1021, 1124, 1200]
      .map(
        (size) =>
          `/slideshow_images/community/Nepean_school2020/Nepean_school2020_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/community/Patterson_lakes_primary2020_200.jpg",
    alt:
      "Photo of christmas tree at Patterson Lakes Primary School, given by Evergreen Christmas Trees",
    caption: "Patterson Lakes Primary - 2020 tree",
    srcset: [200, 335, 440, 526, 688, 707]
      .map(
        (size) =>
          `/slideshow_images/community/Patterson_lakes_primary2020/Patterson_lakes_primary2020_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/community/Chelsea_heights_primary2020_200.jpg",
    alt:
      "Photo of christmas tree at Chelsea Heights Primary School, given by Evergreen Christmas Trees",
    caption: "Chelsea Heights Primary - 2020 tree",
    srcset: [200, 406, 545, 657, 764, 863, 954, 1038, 1131, 1200]
      .map(
        (size) =>
          `/slideshow_images/community/Chelsea_heights_primary2020/Chelsea_heights_primary2020_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/community/Aspendale_gardens_primary2020_200.jpg",
    alt:
      "Photo of christmas tree at Aspendale Gardens Primary School, given by Evergreen Christmas Trees",
    caption: "Aspendale Gardens Primary - 2020 tree",
    srcset: [200, 321, 426, 503, 568, 759, 765]
      .map(
        (size) =>
          `/slideshow_images/community/Aspendale_gardens_primary2020/Aspendale_gardens_primary2020_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/community/Edithvale_primary2020_200.jpg",
    alt:
      "Photo of christmas tree at Edithvale Primary School, given by Evergreen Christmas Trees",
    caption: "Edithvale Primary - 2020 tree",
    srcset: [200, 406, 557, 690, 809, 940, 1052, 1176, 1200]
      .map(
        (size) =>
          `/slideshow_images/community/Edithvale_primary2020/Edithvale_primary2020_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/community/StBrigids_primary2020_200.jpg",
    alt:
      "Photo of christmas tree at St Brigid's Primary School, given by Evergreen Christmas Trees",
    caption: "St Brigid's Primary - 2020 tree",
    srcset: [200, 386, 519, 631, 745, 853, 956, 1061, 1125]
      .map(
        (size) =>
          `/slideshow_images/community/StBrigids_primary2020/StBrigids_primary2020_${size}.jpg ${size}w`
      )
      .join(", "),
  },
  {
    src: "/slideshow_images/community/StJosephs_primary2020_200.jpg",
    alt:
      "Photo of christmas tree at St Joseph's Primary School, given by Evergreen Christmas Trees",
    caption: "St Joseph's Primary - 2020 tree",
    srcset: [200, 385, 534, 623, 782, 918, 1001, 1085, 1175, 1200]
      .map(
        (size) =>
          `/slideshow_images/community/StJosephs_primary2020/StJosephs_primary2020_${size}.jpg ${size}w`
      )
      .join(", "),
  },
];

export const schoolList = [
  "Nepean School",
  "Edithvale Primary School",
  "Chelsea Primary School",
  "Chelsea Heights Primary School",
  "St Joseph's Primary School",
  "Patterson Lakes Primary School",
  "Aspendale Gardens Primary School",
  "St Brigid's Primary School",
  "Cornish College",
  "Seaford Scouts",
  "Pantry 5000",
  "Community Christmas Lunch for the Underprivileged",
];
