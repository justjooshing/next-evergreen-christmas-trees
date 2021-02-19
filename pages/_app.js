import { useState } from "react";

import Layout from "../components/Global/Layout";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [whichPage, setWhichPage] = useState();
  return (
    <Layout whichPage={whichPage}>
      <Component {...pageProps} setWhichPage={setWhichPage} />
    </Layout>
  );
}

export default MyApp;
