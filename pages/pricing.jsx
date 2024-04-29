import Prices from "../components/pages/Prices";
import PageWrapper from "../components/utils/PageWrapper";
import { setPrices } from "../helpers";
import { getContentful } from "../server/ssr";

export const getServerSideProps = async () => {
  const contentful = await getContentful();
  // Sort in order of pricing level // small, medium etc
  const prices = contentful.prices.sort((a, b) =>
    a.fields.basePrice < b.fields.basePrice ? -1 : 1,
  );

  const priceGroups = prices.map(
    ({ fields: { basePrice, pricePerFoot, count } }, i, arr) => ({
      basePrice,
      pricePerFoot,
      count,
      prevSet: arr[i - 1],
    }),
  );

  const priceList = priceGroups
    .flatMap(setPrices)
    .sort((a, b) => (a.price > b.price ? 1 : -1));

  return {
    props: {
      pageName: "Pricing",
      priceList,
    },
  };
};

const PricingPage = ({ priceList }) => {
  return (
    <PageWrapper>
      <Prices prices={priceList} />
    </PageWrapper>
  );
};

export default PricingPage;
