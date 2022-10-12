import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Prices from "../components/pages/Prices";
import PageWrapper from "../components/utils/PageWrapper";
import { setBasePrice, setPage, setPricePerFoot } from "../redux/actions";
import { getBasePrice, getPricePerFoot } from "../util/mongodb";

export const getServerSideProps = async () => ({
  props: {
    pricePerFoot: await getPricePerFoot(),
    basePrice: await getBasePrice(),
  },
});

const PricingPage = ({ pricePerFoot, basePrice }) => {
  const pageName = "Pricing";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
    dispatch(setPricePerFoot(pricePerFoot));
    dispatch(setBasePrice(basePrice));
  }, [dispatch, pricePerFoot, basePrice]);

  return (
    <PageWrapper pageName={pageName}>
      <Prices />
    </PageWrapper>
  );
};

export default PricingPage;
