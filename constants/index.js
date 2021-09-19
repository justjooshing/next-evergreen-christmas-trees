export const openingHours = [
  { days: "Monday to Friday", hours: "2pm - 6pm" },
  { days: "Saturday and Sunday", hours: "9am - 6pm" },
];

export const indexIntro = [
  "We are a family owned and run Christmas tree farm located on the corner of Thames promenade and Riverend road, Bangholme.",
  "Come and take a wander through our trees, taking the time to select your perfect addition for Christmas. Once selected, enjoy our Enchanted Forest and other activities while we cut down your tree and bring it around for pick up.",
  "We look forward to helping to make your Christmas as magical as possible.",
];

export const faqList = [
  {
    question: "Do you deliver?",
    answer:
      "We do not have a delivery service, but we will assist you in putting your tree in or on your car.",
  },
  { question: "Do you net your trees?", answer: "Yes, netting is available." },
  {
    question: "Can I choose my own tree?",
    answer:
      "Yes, we encourage everyone to walk through our trees and choose the tree that will make your Christmas perfect.",
  },
  {
    question: "How often should I water my tree?",
    answer:
      "For the first couple of days after you take your tree home, it will drink a few litres of water. Keep a close eye on this. From here, just check the water levels 2-3 times per week to ensure your tree has enough to drink.",
  },
  {
    question: "Do I need to cut down my own tree?",
    answer:
      "No, once you have chosen your tree, we will come and cut it down for you and take it to the point of sale for collection.",
  },
  {
    question: "Can I put my tree in direct sunlight?",
    answer:
      "It is recommended that you do not leave your tree in direct sunlight. This will cause the tree to go brown sooner.",
  },
  {
    question: "How long will my Christmas tree last?",
    answer:
      "If you keep your tree in fresh water and you ensure you regularly top this up, your tree should last for at least 4-6 weeks.",
  },
  {
    question: "Is there anything else to do while at the farm?",
    answer:
      "Yes, we have the Enchanted Forest and other activities to explore while you are here.",
  },
  {
    question: "What do I do with my Christmas tree after Christmas",
    answer:
      " A lot of councils, such as Kingston, have a service where you are able to leave your tree on your nature strip and book a collection. Please contact your local council to see what is on offer.",
  },
  {
    question: "How do I ensure there are no creepy crawlies in my tree?",
    answer:
      "To ensure that no creepy crawlies come inside with you, we recommend that when you get home you spray your tree with bug spray and leave it for a few hours. All creepy crawlies should fall out and your tree will be safe to take inside. We recommend that the tree is kept in water during this time.",
  },
  {
    question: "Do I need to recut the base of my tree once I get it home?",
    answer:
      "We advise that you put your tree in water as soon as possible. If this is not possible, the base of the tree will seal over. If this happens you will need to cut 2-3cm off the base of the trunk before putting in water.",
  },
  {
    question: "How do I stand my tree up?",
    answer:
      "The best way to stand up your Christmas tree is with a Christmas tree stand. We do sell a selection on site.",
  },
];

export const paths = {
  Home: "/",
  Pricing: "/pricing",
  Contact: "/contact",
  Community: "/community",
  FAQs: "/faqs",
};

export const pageLinks = [
  {
    link_src: paths.Pricing,
    img_src: `/thumbnails/pricing.jpg`,
    img_alt: "Christmas tree sunrise",
    fig_caption: "Pricing",
  },
  {
    link_src: paths.Contact,
    img_src: `/thumbnails/contact.jpg`,
    img_alt: "Screenshot of map",
    fig_caption: "Contact",
  },
  {
    link_src: paths.Community,
    img_src: `/thumbnails/community.jpg`,
    img_alt: "Fresh christmas trees",
    fig_caption: "Community",
  },
  {
    link_src: paths.FAQs,
    img_src: `/thumbnails/faqs.jpg`,
    img_alt: "Frosty morning christmas tree",
    fig_caption: "FAQs",
  },
];

export const treeImages = [
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

export const schoolImages = [
  {
    src: "/slideshow_images/community/Cornish_college2020/Cornish_college2020_200.jpg",
    alt: "Photo of christmas tree at Cornish College, given by Evergreen Christmas Trees",
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
    alt: "Photo of christmas tree at Nepean School, given by Evergreen Christmas Trees",
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
    alt: "Photo of christmas tree at Patterson Lakes Primary School, given by Evergreen Christmas Trees",
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
    alt: "Photo of christmas tree at Chelsea Heights Primary School, given by Evergreen Christmas Trees",
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
    alt: "Photo of christmas tree at Aspendale Gardens Primary School, given by Evergreen Christmas Trees",
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
    alt: "Photo of christmas tree at Edithvale Primary School, given by Evergreen Christmas Trees",
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
    alt: "Photo of christmas tree at St Brigid's Primary School, given by Evergreen Christmas Trees",
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
    alt: "Photo of christmas tree at St Joseph's Primary School, given by Evergreen Christmas Trees",
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

export const metaTags = {
  Global: {
    siteName: "Evergreen Christmas Trees, Bangholme, Victoria",
  },
  Home: {
    description:
      "Are you wondering where you can have a fun family experience choosing a Christmas tree this year? Evergreen Christmas Tree farm is the most friendly and community focused farm to buy Christmas trees around Melbourne. We love being involved with our local schools and community groups as well!",
    previewImage: "/",
    currentURL: "/",
  },
  Pricing: {
    description:
      "Opening the door and smelling the wonderful scent of fresh Christmas tree is so relaxing. Prices for our Christmas trees start at $30 for up to 3 feet, and $10 per metre for anything larger. 3-4ft $40, 4-5ft $50 etc. Come and visit, and walk through our small forest of trees and choose the perfect one for your Christmas.",
    currentURL: "/pricing",
  },
  Contact: {
    description:
      "Here you can find all the details for visiting us here at Evergreen Christmas Farm, or social media links to keep up to date or send us any questions you may have!",
    currentURL: "/contact",
  },
  Community: {
    description:
      "Are you a school or community group looking for a Christmas tree for this year? We have partnered with many different groups over the years to help bring joy to everyone. Come down and have a chat or give us a call to see how we can help you this Christmas!",
    currentURL: "/community",
  },
  FAQs: {
    description:
      "With Christmas fast approaching, you'll want to know how we can help you get the perfect tree this Christmas, and also ensure your tree stays happy and healthy through until early next year. Here you can find our frequently asked questions - Let us know if there is anything not covered that you'd like answered!",
    currentURL: "/faqs",
  },
};

export const verifiedImages = [
  // Width and height are here for the nextjs image component
  {
    src: "/verifiedImages/verified.jpg",
    width: 1751 / 2,
    height: 1180 / 2,
    message: "And look how big my turkey leg is!",
  },
];
