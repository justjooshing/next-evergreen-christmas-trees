import { signIn, useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  setAnnouncements,
  setPage,
  setPrice,
  setAlerts,
} from "../redux/actions";
import PageWrapper from "../components/utils/PageWrapper";
import {
  connectToDatabase,
  getAlerts,
  getAnnouncements,
  getPrice,
} from "../util/mongodb";
import Loading from "../components/atom/Loading";

const Authorised = dynamic(() => import("../components/organism/Authorised"));

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  return {
    props: {
      alerts: await getAlerts(db),
      announcements: await getAnnouncements(db),
      price: await getPrice(db),
    },
  };
}

const AdminPage = ({ alerts, announcements, price }) => {
  const [session, loading] = useSession();

  const pageName = "admin";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
    dispatch(setPrice(price));
    dispatch(setAnnouncements(announcements));
    dispatch(setAlerts(alerts));
  }, [alerts, price, announcements, dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (!session) {
    // calling signIn() redirects you to auth/email-signin
    signIn();
  }

  return (
    <PageWrapper pageName={pageName}>{session && <Authorised />}</PageWrapper>
  );
};

export default AdminPage;
