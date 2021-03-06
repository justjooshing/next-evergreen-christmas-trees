import { useDispatch } from "react-redux";

import adminStyle from "../../styles/Admin.module.css";

const deleteButton = ({ id, deleteFromState, route }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deleteFromState(id));
    await fetch(`/api/${route}`, {
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
