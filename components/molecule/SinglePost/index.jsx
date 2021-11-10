import { adminActions } from "../../../helpers";
import DeleteButton from "../../atom/DeleteButton";
import ToggleVisibility from "../../atom/Toggle";

import style from "./SinglePost.module.scss";

const SinglePost = ({ type, post }) => {
  const { value, id } = post;
  return (
    <div className={style.post}>
      <p>{value}</p>
      <div className={style.post_actions}>
        <ToggleVisibility
          type={type}
          messageToBeToggled={post}
          toggleState={adminActions[type].toggle}
        />
        <DeleteButton
          type={type}
          id={id}
          deleteFromState={adminActions[type].delete}
        />
      </div>
    </div>
  );
};

export default SinglePost;
