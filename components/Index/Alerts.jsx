import indexStyles from "../../styles/index.module.css";

const Alerts = ({ alerts }) => {
  return (
    <>
      {alerts
        .filter((alert) => alert.visibility)
        .map(({ value, id }) => (
          <p className={indexStyles.alert} key={id}>
            {value}
          </p>
        ))}
    </>
  );
};

export default Alerts;
