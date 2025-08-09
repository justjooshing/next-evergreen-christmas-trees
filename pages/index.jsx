import Home from "../components/pages/Home";
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
  <Home announcements={contentful.announcements} alerts={contentful.alerts} />
);

export default HomePage;
