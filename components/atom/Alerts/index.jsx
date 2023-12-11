import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";

import styles from "./Alerts.module.scss";

const Alerts = ({ alerts }) => {
  const selectorRef = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    selectorRef.current = document.querySelector("body");
    setMounted(true);
  }, []);

  const component = alerts.map(({ fields: { alertText }, id }) => (
    <p className={styles.alert} key={id}>
      {alertText}
    </p>
  ));

  return mounted ? ReactDOM.createPortal(component, selectorRef.current) : null;
};
export default Alerts;
