import DeleteButton from "./DeleteButton";
import { deleteAnnouncement } from "../../redux/actions";

import adminStyle from "../../styles/Admin.module.css";

const Announcement = ({ announcement }) => {
  const { value, id } = announcement;
  return (
    <div className={adminStyle.announcement}>
      <p>{value}</p>
      <DeleteButton
        id={id}
        deleteFromState={deleteAnnouncement}
        route="announcements"
      />
    </div>
  );
};

export default Announcement;
