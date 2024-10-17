import { LocalBusiness } from "schema-dts";

export const schema: LocalBusiness = {
  // @ts-expect-error complains that @context is not part of the schema
  "@context": "https://schema.org",
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
  sameAs: [
    "https://www.instagram.com/evergreen_christmas_trees/",
    "https://www.facebook.com/evergreenchrissytrees/",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.84",
    reviewCount: "42", // Google and Facebook
    bestRating: "5",
    worstRating: "1",
  },
  // Google
  review: [
    {
      "@type": "Review",
      author: "D Bevo",
      datePublished: "2023-12-12",
      reviewBody:
        "Picked up our Xmas tree this morning, check out the photo, best tree to date, friendly staff and great location, very reasonable prices, thanks.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      image:
        "https://lh3.googleusercontent.com/p/AF1QipPNCjZs-WWFz2PJOwOgtXxGJTjNP_4M-aAX7xfe=s3840-w3840-h1838",
    },
    {
      "@type": "Review",
      author: "Bethany Hicks",
      datePublished: "2023-12-12",
      reviewBody:
        "Had a great experience at Evergreen! Fields of beautiful trees, lovely staff, and reasonable pricing - definitely coming back next year :)",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      image:
        "https://lh3.googleusercontent.com/p/AF1QipNrs8Swh-NsbBc9d36r2EXoLb4IdbtW8aq8gjgs=s125-p-k",
    },
    {
      "@type": "Review",
      author: "Kate Vincent",
      datePublished: "2021-12-05",
      reviewBody:
        "We had so much fun choosing our fabulous tree last weekend! We didn’t know, but they were just preparing to open for next weekend, but they were more than happy to help us choose our tree a week early. It’s the best tree we’ve ever had - so full and wide. The kids had fun waving the flag like mad when we found “the one” and watching it get cut down with the chainsaw. We will definitely be back next year, and maybe wait until they’re actually open so the kids can enjoy the maze and activities.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
      image:
        "https://lh3.googleusercontent.com/p/AF1QipOGTIAmGR3XnCDzD1Tnez2b_bjfCFIcCMAtl9HG=s3840-w3840-h1838",
    },
    {
      "@type": "Review",
      author: "Peter Mclean",
      datePublished: "2023-10-17",
      reviewBody:
        "Probably the nicest range of trees I've seen in years.. they're all beautiful! And the staff are very friendly and helpful- definitely recommend getting your tree from evergreen!",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
    // Facebook
    {
      "@type": "Review",
      author: "Pob O'Brien",
      datePublished: "2020-12-05",
      reviewBody:
        "Lovely healthy trees and wonderful friendly staff. I highly recommend them and will be back next year.",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
        worstRating: "1",
      },
    },
  ],
};
