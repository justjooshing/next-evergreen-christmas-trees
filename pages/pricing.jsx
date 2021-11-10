import { useEffect } from "react";
import { useDispatch } from "react-redux";

import Prices from "../components/pages/Prices";
import PageWrapper from "../components/utils/PageWrapper";
import { setPage } from "../redux/actions";
import { connectToDatabase, getPrice } from "../util/mongodb";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  return {
    props: { getPrice: await getPrice(db) },
  };
}

const PricingPage = ({ getPrice }) => {
  const pageName = "Pricing";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
  }, [dispatch]);

  return (
    <PageWrapper pageName={pageName}>
      <Prices pricePerFoot={getPrice} />
    </PageWrapper>
  );
};

export default PricingPage;
