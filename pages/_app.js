import Router from 'next/router';
import { Provider as AuthProvider } from "next-auth/client";
import { Provider } from "react-redux";
import store from "../redux/store";
import NProgress from "nprogress";

import Layout from "../components/utils/Layout";

import "nprogress/nprogress.css";
import "../styles/globals.scss";
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
    <AuthProvider session={pageProps.session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </AuthProvider>
  );
}

export default MyApp;
