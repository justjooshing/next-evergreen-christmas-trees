import { useDispatch } from "react-redux";

import adminStyle from "../../styles/Admin.module.css";

const ToggleVisibility = ({ messageToBeToggled, toggleState, route }) => {
  const { visibility, id } = messageToBeToggled;
  const dispatch = useDispatch();

  const className = visibility ? "visibility_on" : "visibility_off";

  const handleToggle = async () => {
    dispatch(toggleState(id));
    await fetch(`/api/${route}`, {
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
