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

const Authorised = dynamic(() => import("../components/organism/Authorised/"));
import PageWrapper from "../components/utils/PageWrapper";

import { connectToDatabase } from "../util/mongodb";

import Loading from "../components/atom/Loading";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const getAnnouncements = await db
    .collection("announcements")
    .find({})
    .toArray();
  const announcements = JSON.parse(JSON.stringify(getAnnouncements));

  const getAlerts = await db.collection("alerts").find({}).toArray();
  const alerts = JSON.parse(JSON.stringify(getAlerts));

  // Return most recent price only
  const getPrice = await db
    .collection("price")
    .find({})
    .sort({ date: -1 })
    .limit(1)
    .toArray();
  const price = JSON.parse(JSON.stringify(getPrice))[0];

  return {
    props: { alerts, announcements, price },
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

  // if (!session) {
  //   // calling signIn() redirects you to auth/email-signin
  //   signIn();
  // }

  return (
    <PageWrapper pageName={pageName}>
      {/*session &&*/ <Authorised />}
    </PageWrapper>
  );
};

export default AdminPage;
