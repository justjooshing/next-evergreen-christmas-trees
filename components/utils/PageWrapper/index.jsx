import Head from "next/head";
import { useContext } from "react";

import { metaTags } from "../../../constants";
import headerData from "../../../constants/headerData.json";
import { AppContext } from "../../../context/app";

const CustomHead = () => {
  const { pageName } = useContext(AppContext);
  const page = metaTags[pageName] || "";
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
          <meta name="description" content={page?.description} />
          <meta
            property="og:description"
            content={page?.description}
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
          <meta property="og:url" content={page?.currentURL} key="ogurl" />
          <meta property="og:locale" content="en_AU" key="oglocale" />
          <script type="application/ld+json">
            {JSON.stringify(headerData).replace(/&quot;/g, '"')}
          </script>
        </>
      )}
    </Head>
  );
};

const PageWrapper = ({ children }) => (
  <>
    <CustomHead />
    {children}
  </>
);

export default PageWrapper;
