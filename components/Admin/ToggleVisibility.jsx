import { useDispatch } from "react-redux";

import { toggleAnnouncement } from "../../redux/actions";

import adminStyle from "../../styles/Admin.module.css";

const ToggleVisibility = ({ announcement }) => {
  const { visibility, id } = announcement;
  const dispatch = useDispatch();

  const className = visibility ? "visibility_on" : "visibility_off";

  const handleToggle = async () => {
    dispatch(toggleAnnouncement(id));
    await fetch(`/api/announcements`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  };
  return (
    <div
      className={`${adminStyle.visibility} ${adminStyle[className]}`}
      onClick={handleToggle}
    ></div>
  );
};

export default ToggleVisibility;
