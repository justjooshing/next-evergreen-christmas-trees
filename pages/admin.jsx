import { signIn, useSession } from "next-auth/client";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  setAnnouncements,
  setPage,
  setPrice,
  setAlert,
} from "../redux/actions";

const Authorised = dynamic(() => import("../components/Admin/Authorised"));
import CustomHead from "../components/Global/CustomHead";

import { connectToDatabase } from "../util/mongodb";

import adminStyle from "../styles/Admin.module.css";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const getAnnouncements = await db.collection("message").find({}).toArray();
  const announcements = JSON.parse(JSON.stringify(getAnnouncements));

  let alert = null;
  const getAlert = await db.collection("alert").find({}).toArray();
  if (getAlert.length > 0) {
    alert = JSON.parse(JSON.stringify(getAlert))[0];
  }
  // Return most recent price only
  const getPrice = await db
    .collection("price")
    .find({})
    .sort({ date: -1 })
    .limit(1)
    .toArray();
  const price = JSON.parse(JSON.stringify(getPrice))[0];

  return {
    props: { alert, announcements, price },
  };
}

const admin = ({ alert, announcements, price }) => {
  const [session, loading] = useSession();

  const pageName = "admin";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
    dispatch(setPrice(price));
    dispatch(setAnnouncements(announcements));
    dispatch(setAlert(alert));
  }, []);

  if (loading) {
    return (
      <div className={adminStyle.auth_wrapper}>
        <button
          className={adminStyle.auth_button}
          onClick={() => {
            alert("Hold your horses");
          }}
        >
          Loading...
        </button>
      </div>
    );
  }

  return (
    <>
      <CustomHead pageName={pageName} />
      {!session && (
        <div className={adminStyle.auth_wrapper}>
          <h3>Not currently signed in</h3>
          <button className={adminStyle.auth_button} onClick={signIn}>
            Sign in
          </button>
        </div>
      )}
      {session && <Authorised />}
    </>
  );
};

export default admin;
