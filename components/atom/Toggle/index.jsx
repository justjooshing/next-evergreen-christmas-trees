import { useDispatch } from "react-redux";
import Switch from "react-switch";

const ToggleVisibility = ({ messageToBeToggled, toggleState, type }) => {
  const { visibility, id } = messageToBeToggled;
  const dispatch = useDispatch();

  const handleToggle = async () => {
    dispatch(toggleState(id));
    await fetch(`/api/requests`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, type }),
    });
  };
  return (
    <Switch
      checkedIcon={false}
      uncheckedIcon={false}
      onChange={handleToggle}
      checked={visibility}
      aria-label={`toggle switch for ${type}`}
    />
  );
};

export default ToggleVisibility;
