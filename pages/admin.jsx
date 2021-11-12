import { signIn, useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  setAnnouncements,
  setPage,
  setPricePerFoot,
  setAlerts,
  setBasePrice,
} from "../redux/actions";
import PageWrapper from "../components/utils/PageWrapper";
import {
  connectToDatabase,
  getAlerts,
  getAnnouncements,
  getPricePerFoot,
  getBasePrice,
} from "../util/mongodb";
import Loading from "../components/atom/Loading";

const Authorised = dynamic(() => import("../components/organism/Authorised"));

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  return {
    props: {
      alerts: await getAlerts(db),
      announcements: await getAnnouncements(db),
      pricePerFoot: await getPricePerFoot(db),
      basePrice: await getBasePrice(db),
    },
  };
}

const AdminPage = ({ alerts, announcements, pricePerFoot, basePrice }) => {
  const [session, loading] = useSession();
  const dispatch = useDispatch();

  const pageName = "admin";
  const isDev = process.env.NODE_ENV !== "production";

  useEffect(() => {
    dispatch(setPage(pageName));
    dispatch(setPricePerFoot(pricePerFoot));
    dispatch(setAnnouncements(announcements));
    dispatch(setAlerts(alerts));
    dispatch(setBasePrice(basePrice));
  }, [alerts, pricePerFoot, announcements, basePrice, dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (!session && !isDev) {
    // calling signIn() redirects you to auth/email-signin
    signIn();
  }

  return (
    <PageWrapper pageName={pageName}>
      {(session || isDev) && <Authorised />}
    </PageWrapper>
  );
};

export default AdminPage;
