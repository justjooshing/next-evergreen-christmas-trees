import styles from "./Alerts.module.scss";

const Alerts = ({ alerts }) => {
  return alerts
    .filter((alert) => alert.visibility)
    .map(({ value, id }) => (
      <p className={styles.alert} key={id}>
        {value}
      </p>
    ));
};

export default Alerts;
