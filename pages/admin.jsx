import { useState, useEffect } from "react";

import { connectToDatabase } from "../util/mongodb";

import DeletePost from "../components/Admin/DeletePost";
import CustomHead from "../components/Global/CustomHead";

import adminStyle from "../styles/Admin.module.css";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const getAnnouncements = await db.collection("message").find({}).toArray();
  const announcements = JSON.parse(JSON.stringify(getAnnouncements));

  const getPrice = await db.collection("price").find({}).toArray();
  const price = JSON.parse(JSON.stringify(getPrice))[0];

  return {
    props: { announcements, price },
  };
}

const admin = ({ announcements, price }) => {
  const pageName = "admin";

  const [newAnnouncement, setNewAnnonucement] = useState();
  const [tempPrice, setTempPrice] = useState();

  const handlePriceSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("api/price", {
      body: JSON.stringify({
        value: tempPrice,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    e.target.reset();
  };

  return (
    <>
      <CustomHead pageName={pageName} />
      <section className={adminStyle.current}>
        <section>
          <h2>Annoucements</h2>
          {announcements.length > 0 ? (
            announcements.map(({ value, _id }) => (
              <div key={_id} className={adminStyle.announcement}>
                <p>{value}</p>
                <DeletePost postId={_id} />
              </div>
            ))
          ) : (
            <h3>No annoucements currently</h3>
          )}
        </section>
        <section>
          <h2>Price</h2>
          <form onSubmit={handlePriceSubmit}>
            <label htmlFor="price">
              <h3>Set new price</h3>
              <input
                type="number"
                id="price"
                onChange={(e) => setTempPrice(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          <h3>Current Price</h3>
          <p className={adminStyle.price}>${price.value} per foot</p>
        </section>
      </section>
    </>
  );
};

export default admin;
