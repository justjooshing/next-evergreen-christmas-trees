import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { signIn, signOut, useSession } from "next-auth/client";

import { setAnnouncements, setPage, setPrice } from "../redux/actions";

import { connectToDatabase } from "../util/mongodb";

import CustomHead from "../components/Global/CustomHead";
import Announcements from "../components/Admin/Announcements";
import Price from "../components/Admin/Price";

import adminStyle from "../styles/Admin.module.css";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const getAnnouncements = await db.collection("message").find({}).toArray();
  const announcements = JSON.parse(JSON.stringify(getAnnouncements));

  const getPrice = await db
    .collection("price")
    .find({})
    .sort({ date: -1 })
    .limit(1)
    .toArray();
  const price = JSON.parse(JSON.stringify(getPrice))[0];

  return {
    props: { announcements, price },
  };
}

const admin = ({ announcements, price }) => {
  const [session, loading] = useSession();

  const pageName = "admin";
  const dispatch = useDispatch();

  // Add to redux
  useEffect(() => {
    dispatch(setPage(pageName));
    dispatch(setPrice(price));
    dispatch(setAnnouncements(announcements));
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      {!session && <button onClick={signIn}>Sign in</button>}
      {session && (
        <>
          <CustomHead pageName={pageName} />
          <section className={adminStyle.current}>
            <Announcements />
            <Price />
          </section>
          <button onClick={signOut}>Sign out</button>
        </>
      )}
    </>
  );
};

export default admin;
