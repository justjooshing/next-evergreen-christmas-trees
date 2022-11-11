import Prices from "../components/pages/Prices";
import PageWrapper from "../components/utils/PageWrapper";
import { getBasePrice, getPricePerFoot } from "../server/ssr";
import {
  useInitialBasePrice,
  useInitialPricePerFoot,
} from "../helpers/requests";

export const getStaticProps = async () => {
  const pricePerFoot = await getPricePerFoot();
  const basePrice = await getBasePrice();
  return {
    props: {
      pageName: "Pricing",
      pricePerFoot,
      basePrice,
    },
  };
};

const PricingPage = ({ pricePerFoot, basePrice }) => {
  useInitialBasePrice(basePrice.value);
  useInitialPricePerFoot(pricePerFoot.value);

  return (
    <PageWrapper>
      <Prices />
    </PageWrapper>
  );
};

export default PricingPage;
