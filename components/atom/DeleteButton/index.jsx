import { useDispatch } from "react-redux";

import style from "./DeleteButton.module.scss";

const DeleteButton = ({ id, deleteFromState, type }) => {
  const dispatch = useDispatch();

  const handleDelete = async () => {
    dispatch(deleteFromState(id));
    await fetch(`/api/requests`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, type }),
    });
  };

  return (
    <button className={style.deletePostButton} onClick={handleDelete}>
      X
    </button>
  );
};

export default DeleteButton;
