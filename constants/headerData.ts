import { LocalBusiness } from "schema-dts";

export const schema: LocalBusiness = {
  "@type": "LocalBusiness",
  name: "Evergreen Christmas Trees",
  image:
    "https://evergreenchristmastrees.com/slideshow_images/index/IMG_5249/IMG_5249_200.jpg",
  "@id": "https://evergreenchristmastrees.com/",
  url: "https://evergreenchristmastrees.com/",
  telephone: "0400402932",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Corner of Thames promenade and Riverend road",
    addressLocality: "Bangholme",
    addressRegion: "VIC",
    postalCode: "3175",
    addressCountry: "AU",
  },
  priceRange: "$",
  geo: {
    "@type": "GeoCoordinates",
    latitude: -38.042306,
    longitude: 145.146012,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "14:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};
