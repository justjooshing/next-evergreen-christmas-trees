import { convertToFeet } from "../../../helpers";

import styles from "./PriceList.module.scss";

const PriceList = ({ prices }) => (
  <ol className={styles.list}>
    {prices.map(({ height, price }, i) => {
      const unitMap = (val, unit) =>
        ({
          ft: convertToFeet(val),
          m: `${val}m`,
        }[unit]);

      const heightRange = (unit) =>
        (i === 0 ? "Up" : `${unitMap(height - 0.25, unit)}`) +
        ` to ${unitMap(height, unit)}`;

      return (
        <li className={styles.item} key={`${price}, ${height}`}>
          <div className={styles.heights}>
            <span>{heightRange("m")}:</span>
            <small className={styles.feet}>{heightRange("ft")}</small>
          </div>
          <span>${price}</span>
        </li>
      );
    })}
  </ol>
);

export default PriceList;
