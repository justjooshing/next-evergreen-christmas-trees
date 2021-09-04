import Head from "next/head";
import { metaTags } from "../../../constants";

const CustomHead = ({ pageName }) => {
  const page = metaTags[pageName];
  return (
    <Head>
      {pageName === "admin" || pageName === "404 - Not Found" ? (
        <>
          <meta name="robots" content="noindex, nofollow" />
          <title>{pageName}</title>
        </>
      ) : (
        <>
          <meta name="robots" content="index, follow" />

          <title>{`${pageName} - ${metaTags.Global.siteName}`}</title>
          <meta
            property="og:title"
            content={`${pageName} - ${metaTags.Global.siteName}`}
            key="ogtitle"
          />
          <meta name="description" content={page.description} />
          <meta
            property="og:description"
            content={page.description}
            key="ogdesc"
          />

          <meta
            property="og:site_name"
            content={metaTags.Global.siteName}
            key="ogsitename"
          />
          <meta
            property="og:image"
            content="/slideshow_images/index/IMG_5249.jpg"
            key="ogimage"
          />
          <meta
            property="og:image:alt"
            content="Evergreen Christmas Trees Sign"
          />
          <meta property="og:url" content={page.currentURL} key="ogurl" />
          <meta property="og:locale" content="en_AU" key="oglocale" />
          <script type="application/ld+json">
            {`{
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Evergreen Christmas Trees",
              "image": "https://evergreenchristmastrees.com/slideshow_images/index/IMG_5249/IMG_5249_200.jpg",
              "@id": "https://evergreenchristmastrees.com/",
              "url": "https://evergreenchristmastrees.com/",
              "telephone": "0400402932",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Corner of Thames promenade and Riverend road",
                "addressLocality": "Bangholme",
                "addressRegion": "VIC",
                "postalCode": "3175",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -38.042306,
                "longitude": 145.146012
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "14:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Saturday", "Sunday"],
                  "opens": "09:00",
                  "closes": "18:00"
                }
              ]
            }`}
          </script>
        </>
      )}
    </Head>
  );
};

const PageWrapper = ({ pageName, children }) => (
  <>
    <CustomHead pageName={pageName} />
    {children}
  </>
);

export default PageWrapper;
