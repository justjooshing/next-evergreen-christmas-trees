import Prices from "../components/pages/Prices";
import PageWrapper from "../components/utils/PageWrapper";
import { getBasePrice, getPricePerFoot } from "../server/ssr";
import {
  useInitialBasePrice,
  useInitialPricePerFoot,
} from "../helpers/requests";

export const getStaticProps = async () => ({
  props: {
    pageName: "Pricing",
    pricePerFoot: await getPricePerFoot(),
    basePrice: await getBasePrice(),
  },
});

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
