import Layout from "../components/Global/Layout";

import { Provider } from "react-redux";

import store from "../redux/store";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  // nprogress is a cool package for changing pages
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
