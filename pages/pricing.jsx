import Prices from "../components/pages/Prices";
import { setPrices } from "../helpers";
import { getContentful } from "../server/ssr";

export const getServerSideProps = async () => {
  const contentful = await getContentful();
  // Sort in order of pricing level // small, medium etc
  const priceSets = contentful.prices.sort((a, b) =>
    a.fields.basePrice < b.fields.basePrice ? -1 : 1,
  );

  /**
   * Add total counts until current index
   */
  const lengthUntilCurrent = (currentIndex) =>
    priceSets.reduce(
      (acc, { fields: { count } }, i) => (i < currentIndex ? acc + count : acc),
      0,
    );

  const priceGroups = priceSets.reduce(
    (acc, { fields: { basePrice, pricePerFoot, count } }, i) => {
      const prices = setPrices({
        basePrice,
        pricePerFoot,
        count,
        prevCount: lengthUntilCurrent(i),
      });
      acc.push(...prices);
      return acc;
    },
    [],
  );

  const priceList = priceGroups.sort((a, b) => (a.price > b.price ? 1 : -1));

  return {
    props: {
      pageName: "Pricing",
      priceList,
    },
  };
};

const PricingPage = ({ priceList }) => <Prices prices={priceList} />;

export default PricingPage;
