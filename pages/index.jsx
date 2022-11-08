import Home from "../components/pages/Home";
import PageWrapper from "../components/utils/PageWrapper";
import { getAlerts, getAnnouncements } from "../server/ssr";

export const getStaticProps = async () => ({
  props: {
    pageName: "Home",
    announcements: await getAnnouncements(),
    alerts: await getAlerts(),
  },
});

const HomePage = ({ announcements, alerts }) => (
  <PageWrapper>
    <Home announcements={announcements} alerts={alerts} />
  </PageWrapper>
);

export default HomePage;
