import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "../components/pages/Home";
import PageWrapper from "../components/utils/PageWrapper";
import { setPage } from "../redux/actions";
import { db, getAlerts, getAnnouncements } from "../util/mongodb";

export const getServerSideProps = async () => ({
  props: {
    announcements: await getAnnouncements(db),
    alerts: await getAlerts(db),
  },
});

const HomePage = ({ announcements, alerts }) => {
  const pageName = "Home";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
  }, [dispatch]);

  return (
    <PageWrapper pageName={pageName}>
      <Home announcements={announcements} alerts={alerts} />
    </PageWrapper>
  );
};

export default HomePage;
