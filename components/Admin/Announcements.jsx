import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAnnouncement } from "../../redux/actions";

import { nanoid } from "nanoid";

import Announcement from "./Announcement";

const Announcements = () => {
  const announcements = useSelector((state) => state.announcements);
  const dispatch = useDispatch();

  const [tempAnnouncement, setTempAnnouncement] = useState();

  const handleAnnouncementSubmit = async (e) => {
    e.preventDefault();
    const value = tempAnnouncement;
    const id = nanoid(10);
    dispatch(addAnnouncement({ value, id }));
    e.target.reset();

    await fetch("/api/announcements", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value, id }),
    });
  };

  return (
    <section>
      <h2>Announcements</h2>
      <form onSubmit={handleAnnouncementSubmit}>
        <label htmlFor="announcements">
          <h3>Edit Announcements</h3>
          <input
            type="text"
            id="announcement"
            onChange={(e) => setTempAnnouncement(e.target.value)}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      {announcements.length > 0 ? (
        announcements.map((announcement) => (
          <Announcement key={announcement.id} announcement={announcement} />
        ))
      ) : (
        <h3>No announcements currently</h3>
      )}
    </section>
  );
};

export default Announcements;
