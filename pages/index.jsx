
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Home from "../components/pages/Home";
import PageWrapper from "../components/utils/PageWrapper";
import { setPage } from "../redux/actions";
import { connectToDatabase } from "../util/mongodb";


export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const getAnnouncements = await db
    .collection("announcements")
    .find({})
    .toArray();
  const announcements = JSON.parse(JSON.stringify(getAnnouncements));

  const getAlert = await db.collection("alerts").find({}).toArray();
  const alerts = JSON.parse(JSON.stringify(getAlert));

  return {
    props: { announcements, alerts },
  };
}

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
