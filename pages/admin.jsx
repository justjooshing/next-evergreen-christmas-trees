import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

import { connectToDatabase } from "../util/mongodb";

import DeletePost from "../components/Admin/DeletePost";
import CustomHead from "../components/Global/CustomHead";

import adminStyle from "../styles/Admin.module.css";

// pull in all announcements and price
// save to redux? To be able to change from client
// side rather than forcing re-render?

// DELETE announcement
// onClick, send delete request to db
// deleting matching id from announcements collection

// POST annoucement
// enter next into input field
// onsubmit, add new annoucement to db

// PUT announcement
// onclick, add text to input field
// onsubmit, update existing annoucement in db from by id

// PUT price
// enter new price in input field
// update id in db in price collection to new price

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

  const [currentAnnouncements, setCurrentAnnouncements] = useState([
    ...announcements,
  ]);

  const [tempAnnouncement, setTempAnnouncement] = useState();
  const [tempPrice, setTempPrice] = useState();
  const [editingAnnouncement, setEditingAnnouncement] = useState({
    id: "",
    value: "",
  });

  const handlePriceSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();
    e.target.reset();
    const value = parseInt(tempPrice);
    const response = await fetch("/api/price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });
    const body = await response.json();
    e.target.reset();
    return body;
  };

  const handleAnnouncementSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();

    const value = tempAnnouncement;
    const id = nanoid(10);
    setCurrentAnnouncements([...currentAnnouncements, { value, id }]);
    e.target.reset();
    const response = await fetch("/api/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value, id }),
    });
    const body = await response.json();
    return body;
  };

  return (
    <>
      <CustomHead pageName={pageName} />
      <section className={adminStyle.current}>
        <section>
          <h2>Announcements</h2>
          <form onSubmit={handleAnnouncementSubmit}>
            <label htmlFor="announcements">
              <h3>Edit Announcements</h3>
              <input
                type="textarea"
                id="announcement"
                onChange={(e) => setTempAnnouncement(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
          {currentAnnouncements.length > 0 ? (
            currentAnnouncements.map(({ value, id }) => (
              <div
                key={id}
                className={adminStyle.announcement}
                onClick={() => setEditingAnnouncement({ id, value })}
              >
                <p>{value}</p>
                <DeletePost id={id} />
              </div>
            ))
          ) : (
            <h3>No announcements currently</h3>
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
