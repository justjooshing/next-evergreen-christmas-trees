import { useState } from "react";
import { nanoid } from "nanoid";

import Announcement from "./Announcement";

// DELETE announcement
// onClick, send delete request to db
// deleting matching id from announcements collection

const Announcements = ({ announcements }) => {
  const [currentAnnouncements, setCurrentAnnouncements] = useState(
    announcements
  );
  const [tempAnnouncement, setTempAnnouncement] = useState();

  const handleAnnouncementSubmit = async (e) => {
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

  const handleDelete = async (id) => {
    const msgsWithoutDeletedMessage = currentAnnouncements.filter(
      (item) => item.id !== id
    );
    setCurrentAnnouncements(msgsWithoutDeletedMessage);
    const response = await fetch("/api/announcements", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    const body = await response.json();
    return body;
  };

  return (
    <div>
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
        {currentAnnouncements.length > 0 ? (
          currentAnnouncements.map((announcement) => (
            <Announcement
              key={announcement.id}
              announcement={announcement}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <h3>No announcements currently</h3>
        )}
      </section>
    </div>
  );
};

export default Announcements;
