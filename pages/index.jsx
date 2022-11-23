import Home from "../components/pages/Home";
import PageWrapper from "../components/utils/PageWrapper";
import { useInitialAlerts, useInitialAnnouncements } from "../helpers/requests";
import { getAlerts, getAnnouncements } from "../server/ssr";

export const getServerSideProps = async () => {
  const announcements = await getAnnouncements();
  const alerts = await getAlerts();
  return {
    props: {
      pageName: "Home",
      announcements,
      alerts,
    },
  };
};

const HomePage = ({ announcements, alerts }) => {
  useInitialAnnouncements(announcements);
  useInitialAlerts(alerts);
  return (
    <PageWrapper>
      <Home announcements={announcements} alerts={alerts} />
    </PageWrapper>
  );
};

export default HomePage;
