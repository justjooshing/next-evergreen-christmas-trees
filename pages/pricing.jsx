import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Prices from "../components/pages/Prices";
import PageWrapper from "../components/utils/PageWrapper";
import { setPage } from "../redux/actions";
import { getBasePrice, getPricePerFoot } from "../server/ssr";
import {
  useInitialBasePrice,
  useInitialPricePerFoot,
} from "../helpers/requests";

export const getServerSideProps = async () => ({
  props: {
    pricePerFoot: await getPricePerFoot(),
    basePrice: await getBasePrice(),
  },
});

const PricingPage = ({ pricePerFoot, basePrice }) => {
  useInitialBasePrice(basePrice.value);
  useInitialPricePerFoot(pricePerFoot.value);

  const pageName = "Pricing";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
  }, [dispatch]);

  return (
    <PageWrapper pageName={pageName}>
      <Prices />
    </PageWrapper>
  );
};

export default PricingPage;
