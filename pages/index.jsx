import Home from "../components/pages/Home";
import PageWrapper from "../components/utils/PageWrapper";
import { useInitialAlerts, useInitialAnnouncements } from "../helpers/requests";
import { getAlerts, getAnnouncements, getContentful } from "../server/ssr";

export const getServerSideProps = async () => {
  const contentful = await getContentful();
  const announcements = await getAnnouncements();
  const alerts = await getAlerts();
  return {
    props: {
      pageName: "Home",
      announcements,
      alerts,
      contentful,
    },
  };
};

const HomePage = ({ announcements, alerts, contentful }) => {
  useInitialAnnouncements(announcements);
  useInitialAlerts(alerts);
  return (
    <PageWrapper>
      <Home
        announcements={contentful.announcements}
        alerts={contentful.alerts}
      />
    </PageWrapper>
  );
};

export default HomePage;
