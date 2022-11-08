import { useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";
import { Provider } from "react-redux";
import {
  QueryClientProvider,
  QueryClient,
  Hydrate,
} from "@tanstack/react-query";

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
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
