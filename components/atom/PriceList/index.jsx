import styles from "./PriceList.module.scss";

const PriceList = ({ val, entryCount = undefined }) => {
  // starting with 'Up to 3ft in already' because naming convention is different
  const setPrices = (n = 10) => {
    const prices = [{ range: "Up to 3ft", price: n * 3 + 10 }];

    for (let i = 4; i <= 10; i++) {
      prices.push({
        range: `${i - 1}ft up to ${i}ft`,
        price: n * i + 10,
      });
    }
    return prices;
  };

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
