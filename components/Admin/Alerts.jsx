import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import TextareaAutoSize from "react-textarea-autosize";

import Alert from "./Alert";
import { addAlert } from "../../redux/actions";

import adminStyle from "../../styles/Admin.module.css";

const Alerts = () => {
  const alerts = useSelector((state) => state.alerts);
  const dispatch = useDispatch();

  const [tempAlert, setTempAlert] = useState();

  const handleAlertSubmit = async (e) => {
    e.preventDefault();
    const value = tempAlert;
    const id = nanoid(10);
    dispatch(addAlert({ value, id }));
    e.target.reset();

    await fetch("/api/alert", {
      method: "POST",
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
      {alerts.length > 0 ? (
        alerts.map((alert) => <Alert key={alert.id} alert={alert} />)
      ) : (
        <h3>No alerts set</h3>
      )}
    </section>
  );
};

export default Alerts;
