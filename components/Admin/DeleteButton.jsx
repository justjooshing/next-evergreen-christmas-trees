import { deleteAnnouncement } from "../../redux/actions";
import { useDispatch } from "react-redux";

import adminStyle from "../../styles/Admin.module.css";

const deleteButton = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deleteAnnouncement(id));
    await fetch("/api/announcements", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  };

  return (
    <div className={adminStyle.deletePostButton} onClick={handleDelete}>
      X
    </div>
  );
};

export default deleteButton;
