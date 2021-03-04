import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import TextareaAutoSize from "react-textarea-autosize";

import { addAnnouncement } from "../../redux/actions";
import Announcement from "./Announcement";

import adminStyle from "../../styles/Admin.module.css";

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
          <div className={adminStyle.input_wrapper}>
            <TextareaAutoSize
              type="text"
              id="announcement"
              onChange={(e) => setTempAnnouncement(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </div>
        </label>
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
