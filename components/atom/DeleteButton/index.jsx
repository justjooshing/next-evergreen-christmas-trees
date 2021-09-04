import { useDispatch } from "react-redux";

import style from "./DeleteButton.module.scss";

const DeleteButton = ({ id, deleteFromState, route }) => {
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
    <button className={style.deletePostButton} onClick={handleDelete}>
      X
    </button>
  );
};

export default DeleteButton;
