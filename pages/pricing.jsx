import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import { connectToDatabase } from "../util/mongodb";

import PageWrapper from "../components/utils/PageWrapper";
import Prices from "../components/pages/Prices";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const getPrice = await db
    .collection("price")
    .find({})
    .sort({ date: -1 })
    .limit(1)
    .toArray();
  const parsePrice = JSON.parse(JSON.stringify(getPrice))[0];

  return {
    props: { getPrice: parsePrice },
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
