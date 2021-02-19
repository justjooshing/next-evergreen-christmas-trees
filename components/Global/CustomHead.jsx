import Head from "next/head";

const CustomHead = ({ pageName }) => (
  <Head>
    <title>{`${pageName} - Evergreen Christmas Trees`}</title>
  </Head>
);

export default CustomHead;
