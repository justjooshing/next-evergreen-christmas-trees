import DeleteButton from "./DeleteButton";
import ToggleVisibility from "./ToggleVisibility";

import { deleteAlert, toggleAlert } from "../../redux/actions";

import adminStyle from "../../styles/Admin.module.css";

const Alert = ({ alert }) => {
  const { value, id } = alert;
  return (
    <div className={adminStyle.announcement}>
      <p>{value}</p>
      <ToggleVisibility
        route="alert"
        messageToBeToggled={alert}
        toggleState={toggleAlert}
      />
      <DeleteButton id={id} deleteFromState={deleteAlert} route="alert" />
    </div>
  );
};

export default Alert;
