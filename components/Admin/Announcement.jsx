import DeleteButton from "./DeleteButton";

import adminStyle from "../../styles/Admin.module.css";

const Annoucement = ({ announcement, handleDelete }) => {
  const { value, id } = announcement;
  return (
    <div className={adminStyle.announcement}>
      <p>{value}</p>
      <DeleteButton id={id} handleDelete={handleDelete} />
    </div>
  );
};

export default Annoucement;
