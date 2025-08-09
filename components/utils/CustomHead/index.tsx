import Head from "next/head";
import * as React from "react";
import { useContext } from "react";

import { metaTags } from "../../../constants";
import { schema } from "../../../constants/headerData";
import { AppContext } from "../../../context/app";
import { useRouter } from "next/router";
import { server } from "../../../config";

export const CustomHead = () => {
  const { pathname } = useRouter();
  const { pageName } = useContext(AppContext);

  const {
    Global: { siteName },
  } = metaTags;

  const page = metaTags[pageName] || "";

  const currentUrl = server + pathname;

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

          <title>{`${pageName} - ${siteName}`}</title>
          <meta
            property="og:title"
            content={`${pageName} - ${siteName}`}
            key="ogtitle"
          />
          <meta name="description" content={page?.description} />
          <meta
            property="og:description"
            content={page?.description}
            key="ogdesc"
          />

          <meta property="og:site_name" content={siteName} key="ogsitename" />
          <meta
            property="og:image"
            content="/slideshow_images/index/IMG_5249.jpg"
            key="ogimage"
          />
          <meta
            property="og:image:alt"
            content="Evergreen Christmas Trees Sign"
          />
          <meta property="og:url" content={currentUrl} key="ogurl" />
          <meta property="og:locale" content="en_AU" key="oglocale" />
          <link rel="canonical" href={currentUrl} />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        </>
      )}
    </Head>
  );
};
