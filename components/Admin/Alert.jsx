import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import TextareaAutoSize from "react-textarea-autosize";

import { setAlert, deleteAlert } from "../../redux/actions";
import DeleteButton from "./DeleteButton";

import adminStyle from "../../styles/Admin.module.css";

const Alert = () => {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  const [tempAlert, setTempAlert] = useState();

  const handleAlertSubmit = async (e) => {
    e.preventDefault();
    const value = tempAlert;
    const id = alert?.id || nanoid(10);
    dispatch(setAlert({ value, id }));
    e.target.reset();

    await fetch("/api/alert", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value, id }),
    });
  };

  return (
    <section className={adminStyle.alert_container}>
      <h2>Alert</h2>
      <form onSubmit={handleAlertSubmit}>
        <label htmlFor="alert">
          <h3>Update Alert</h3>
          <div className={adminStyle.input_wrapper}>
            <TextareaAutoSize
              type="text"
              id="alert"
              onChange={(e) => setTempAlert(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </div>
        </label>
      </form>
      {alert?.value ? (
        <div className={adminStyle.announcement}>
          <p>{alert.value}</p>
          <DeleteButton
            id={alert.id}
            deleteFromState={deleteAlert}
            route="alert"
          />
        </div>
      ) : (
        <h3>No alert set</h3>
      )}
    </section>
  );
};

export default Alert;
