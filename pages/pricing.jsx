import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../redux/actions";

import { connectToDatabase } from "../util/mongodb";

import CustomHead from "../components/Global/CustomHead";
import setPrices from "../components/config/treePrices.jsx";

import pricingStyle from "../styles/Pricing.module.css";

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

const pricing = ({ getPrice }) => {
  const pageName = "Pricing";
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setPage(pageName));
  }, []);

  return (
    <>
      <CustomHead pageName={pageName} />
      <section className={pricingStyle.main}>
        <div>
          <h3>Pricing</h3>
          {/* prices list */}
          <ol className={pricingStyle.list}>
            {setPrices(getPrice.value).map(({ range, price }) => (
              <li key={price} className={pricingStyle.item}>
                {range}: ${price}
              </li>
            ))}
          </ol>
          <p>Prices subject to change</p>
        </div>
        <div>
          <Image
            src="/pricing_tree.jpg"
            alt="christmas tree"
            height={500}
            width={333}
            className={pricingStyle.image}
          />
        </div>
      </section>
    </>
  );
};

export default pricing;
