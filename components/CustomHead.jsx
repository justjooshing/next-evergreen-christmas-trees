import Head from "next/head";

const CustomHead = ({ pageName }) => {
  return (
    <Head>
      <title>{`${pageName} - Evergreen Christmas Trees`}</title>
    </Head>
  );
};

export default CustomHead;
