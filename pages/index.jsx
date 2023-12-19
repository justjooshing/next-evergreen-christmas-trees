import Home from "../components/pages/Home";
import PageWrapper from "../components/utils/PageWrapper";
import { getContentful } from "../server/ssr";

export const getServerSideProps = async () => {
  const contentful = await getContentful();
  return {
    props: {
      pageName: "Home",
      contentful,
    },
  };
};

const HomePage = ({ contentful }) => (
  <PageWrapper>
    <Home announcements={contentful.announcements} alerts={contentful.alerts} />
  </PageWrapper>
);

export default HomePage;
