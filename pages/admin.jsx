import { signIn, useSession } from "next-auth/react";
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
  db,
  getAlerts,
  getAnnouncements,
  getPricePerFoot,
  getBasePrice,
} from "../util/mongodb";
import Loading from "../components/atom/Loading";

const Authorised = dynamic(() => import("../components/organism/Authorised"));

export const getServerSideProps = async () => ({
  props: {
    alerts: await getAlerts(db),
    announcements: await getAnnouncements(db),
    pricePerFoot: await getPricePerFoot(db),
    basePrice: await getBasePrice(db),
  },
});

const AdminPage = ({ alerts, announcements, pricePerFoot, basePrice }) => {
  const { status } = useSession();
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

  useEffect(() => {
    if (status === "unauthenticated" && !isDev) {
      // calling signIn() redirects you to auth/email-signin
      signIn();
    }
  }, [status, isDev]);

  if (status === "loading") {
    return <Loading />;
  }

  return (
    <PageWrapper pageName={pageName}>
      {(status === "authenticated" || isDev) && <Authorised />}
    </PageWrapper>
  );
};

export default AdminPage;
