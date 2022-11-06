import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";

import Layout from "../components/utils/Layout";
import store from "../redux/store";

/* eslint-disable import/no-unassigned-import */
import "nprogress/nprogress.css";
import "../styles/globals.scss";
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
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
