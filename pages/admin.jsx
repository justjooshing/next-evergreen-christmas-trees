import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
  const pageName = "admin";
  const dispatch = useDispatch();

  // Add to redux
  useEffect(() => {
    dispatch(setPage(pageName));
    dispatch(setPrice(price));
    dispatch(setAnnouncements(announcements));
  }, []);

  return (
    <>
      <CustomHead pageName={pageName} />
      <section className={adminStyle.current}>
        <Announcements />
        <Price />
      </section>
    </>
  );
};

export default admin;
