import { convertToFeet } from "../../../helpers";

import styles from "./PriceList.module.scss";

const PriceList = ({ prices }) => (
  <ol className={styles.list}>
    {prices.map(({ height, price }) => (
      <li className={styles.item} key={`${price}, ${height}`}>
        <div className={styles.heights}>
          <span>Up to {height}m:</span>
          <small className={styles.feet}>({convertToFeet(height)})</small>
        </div>
        <span>${price}</span>
      </li>
    ))}
  </ol>
);

export default PriceList;
