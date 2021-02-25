import DeleteButton from "./DeleteButton";
import adminStyle from "../../styles/Admin.module.css";

const Announcement = ({ announcement }) => {
  const { value, id } = announcement;
  return (
    <div className={adminStyle.announcement}>
      <p>{value}</p>
      <DeleteButton id={id} />
    </div>
  );
};

export default Announcement;
