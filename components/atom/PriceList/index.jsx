import { setPrices } from "../../../helpers";

import styles from "./PriceList.module.scss";

const PriceList = ({ val, entryCount = undefined }) => {
  const priceList = setPrices(val);

  return (
    <ol className={styles.list}>
      {priceList.slice(0, entryCount).map(({ range, price }) => (
        <li className={styles.item} key={`${price}, ${range}`}>
          {range}: ${price}
        </li>
      ))}
    </ol>
  );
};

export default PriceList;
