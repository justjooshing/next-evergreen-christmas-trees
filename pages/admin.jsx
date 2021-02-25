import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import { connectToDatabase } from "../util/mongodb";

import CustomHead from "../components/Global/CustomHead";
import Annoucements from "../components/Admin/Announcements";
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

  useEffect(() => {
    dispatch(setPage(pageName));
  }, []);

  return (
    <>
      <CustomHead pageName={pageName} />
      <section className={adminStyle.current}>
        <Annoucements announcements={announcements} />
        <Price price={price} />
      </section>
    </>
  );
};

export default admin;
