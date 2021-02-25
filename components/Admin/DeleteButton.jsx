import adminStyle from "../../styles/Admin.module.css";

const deleteButton = ({ id, handleDelete }) => {
  return (
    <div
      className={adminStyle.deletePostButton}
      onClick={() => handleDelete(id)}
    >
      X
    </div>
  );
};

export default deleteButton;
