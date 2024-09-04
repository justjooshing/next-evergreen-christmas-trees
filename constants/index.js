import { mapSrcSet } from "../helpers";

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
      "No, once you have chosen your tree, we will come and cut it down for you.",
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
      "A lot of councils, such as Kingston, have a service where you are able to leave your tree on your nature strip and book a collection. Please contact your local council to see what is on offer.",
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
  {
    question: "Are dogs allowed?",
    answer:
      "Yes, we are happy to welcome your furry friends, as long as they're kept on a leash at all times and you bring poop bags in case you need to pick up after them.",
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

const mapTreeImagesSrcSet = mapSrcSet("/slideshow_images/index");

export const treeImages = [
  // Width and height are here for the nextjs image component
  {
    ...mapTreeImagesSrcSet(
      [200, 444, 622, 766, 914, 1044, 1158, 1284, 1352, 1400],
      "IMG_5249",
    ),
    alt: "Evergreen trees fence and sign",
    width: 2457,
    height: 1755,
  },
  {
    ...mapTreeImagesSrcSet(
      [200, 841, 1261, 1616, 1982, 2292, 2391, 2555, 2772, 2800],
      "IMG_0454",
    ),
    alt: "Christmas tree image",
    width: 3024,
    height: 4032,
  },
  {
    ...mapTreeImagesSrcSet(
      [200, 465, 641, 813, 928, 1054, 1176, 1296, 1356, 1400],
      "IMG_5253",
    ),
    alt: "Three christmas trees",
    width: 2925,
    height: 4096,
  },
  {
    ...mapTreeImagesSrcSet([200, 399, 545, 670, 720], "IMG_5503"),
    alt: "Man with flag next to tree",
    width: 720,
    height: 960,
  },
  {
    ...mapTreeImagesSrcSet(
      [200, 495, 693, 865, 1002, 1146, 1233, 1342, 1373, 1400],
      "IMG_5592",
    ),
    alt: "Christmas tree in trailer",
    width: 4096,
    height: 2925,
  },
  {
    ...mapTreeImagesSrcSet([200, 387, 535, 657, 781, 890, 960], "IMG_7235"),
    alt: "Christmas tree cluster",
    width: 960,
    height: 720,
  },
  {
    ...mapTreeImagesSrcSet([200, 468, 611, 748, 873, 960], "IMG_7241"),
    alt: "Netting christmas tree",
    width: 960,
    height: 720,
  },
  {
    ...mapTreeImagesSrcSet(
      [200, 454, 647, 759, 887, 1031, 1144, 1255, 1373, 1400],
      "IMG_7581",
    ),
    alt: "Christmas tree sunrise fence",
    width: 3024,
    height: 4032,
  },
  {
    ...mapTreeImagesSrcSet(
      [200, 462, 620, 762, 889, 1006, 1146, 1264, 1299, 1400],
      "Rainbow",
    ),
    alt: "Christmas tree forest",
    width: 1440,
    height: 1298,
  },
];

const mapSchoolImagesSrcSet = mapSrcSet("/slideshow_images/community");
export const schoolImages = [
  {
    alt: "Christmas tree at Cornish College, given by Evergreen Christmas Trees",
    caption: "Cornish College - 2023 tree",
    ...mapSchoolImagesSrcSet(
      [200, 456, 632, 800, 935, 1056, 1170, 1281, 1385, 1400],
      "Cornish_college_2023",
    ),
  },
  {
    alt: "Christmas tree at Nepean School, given by Evergreen Christmas Trees",
    caption: "Nepean School - 2020 tree",
    ...mapSchoolImagesSrcSet(
      [200, 365, 490, 643, 752, 841, 922, 1021, 1124, 1200],
      "Nepean_school2020",
    ),
  },
  {
    alt: "Christmas tree at Patterson Lakes Primary School, given by Evergreen Christmas Trees",
    caption: "Patterson Lakes Primary - 2023 tree",
    ...mapSchoolImagesSrcSet([200, 348, 361], "Patterson_lakes_primary_2023"),
  },
  {
    alt: "Christmas tree at Chelsea Heights Primary School, given by Evergreen Christmas Trees",
    caption: "Chelsea Heights Primary - 2020 tree",
    ...mapSchoolImagesSrcSet(
      [200, 406, 545, 657, 764, 863, 954, 1038, 1131, 1200],
      "Chelsea_heights_primary2020",
    ),
  },
  {
    alt: "Christmas tree at Aspendale Gardens Primary School, given by Evergreen Christmas Trees",
    caption: "Aspendale Gardens Primary - 2020 tree",
    ...mapSchoolImagesSrcSet(
      [200, 321, 426, 503, 568, 759, 765],
      "Aspendale_gardens_primary2020",
    ),
  },
  {
    alt: "Christmas tree at Edithvale Primary School, given by Evergreen Christmas Trees",
    caption: "Edithvale Primary - 2023 tree",
    ...mapSchoolImagesSrcSet(
      [200, 331, 439, 535, 632, 692, 750],
      "Edithvale_primary_2023",
    ),
  },
  {
    alt: "Christmas tree at St Brigid's Primary School, given by Evergreen Christmas Trees",
    caption: "St Brigid's Primary - 2023 tree",
    ...mapSchoolImagesSrcSet(
      [200, 448, 609, 776, 898, 995, 1123, 1225, 1350, 1400],
      "St_Brigids_2023",
    ),
  },
  {
    alt: "Christmas tree at St Joseph's Primary School, given by Evergreen Christmas Trees",
    caption: "St Joseph's Primary - 2023 tree",
    ...mapSchoolImagesSrcSet([200, 369, 474, 480], "St_Josephs_2023"),
  },
];

export const schoolList = [
  "Aspendale Gardens Primary School",
  "Chelsea Heights Primary School",
  "Chelsea Primary School",
  "Chelsea Rotary Club",
  "Community Christmas Lunch for the Underprivileged",
  "Cornish College",
  "Edithvale Primary School",
  "Nepean School",
  "Pantry 5000",
  "Patterson Lakes Primary School",
  "St Brigid's Primary School",
  "St Joseph's Primary School",
  "St Louis de Montfort Primary School",
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
