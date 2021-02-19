import Image from "next/image";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../actions";

import CustomHead from "../components/Global/CustomHead";
import prices from "../components/config/treePrices.jsx";

import pricingStyle from "../styles/Pricing.module.css";

const pricing = () => {
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
            {prices.map(({ range, price }) => (
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
          />
        </div>
      </section>
    </>
  );
};

export default pricing;
