import { useBasePrice, usePricePerFoot } from "../../../helpers/requests";

import styles from "./PriceList.module.scss";

const PriceList = ({ val, entryCount = undefined }) => {
  const { data: basePrice } = useBasePrice();
  const { data: pricePerFoot } = usePricePerFoot();

  // starting with 'Up to 3ft in already' because naming convention is different
  // ppf is pricePerFoot
  const setPrices = (ppf = 10) => {
    const prices = [{ range: "Up to 3ft", price: ppf * 3 + basePrice }];
    const smallTreePrice = (height) => ppf * height + basePrice;
    const largeTreePrice = (height) => 15 * (height - 9) + 105; // $15/ft on top of max smallTreePrice;

    for (let i = 4; i <= 13; i++) {
      prices.push({
        range: `${i - 1}ft up to ${i}ft`,
        price: i < 10 ? smallTreePrice(i) : largeTreePrice(i),
      });
    }

    return prices;
  };

  const priceList = setPrices(val || pricePerFoot);

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
