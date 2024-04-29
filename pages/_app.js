import Router from "next/router";
import NProgress from "nprogress";
// eslint-disable-next-line import/no-unresolved
import { Analytics } from "@vercel/analytics/react";

import Layout from "../components/utils/Layout";
/* eslint-disable import/no-unassigned-import */
import "nprogress/nprogress.css";
import "../styles/globals.scss";
import AppProvider from "../context/app";
/* eslint-enable import/no-unassigned-import */

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => {
  NProgress.start();
});

Router.events.on("routeChangeComplete", () => {
  NProgress.done();
});

Router.events.on("routeChangeError", () => {
  NProgress.done();
});

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider pageName={pageProps.pageName}>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </AppProvider>
  );
}

export default MyApp;
