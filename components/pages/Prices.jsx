import Image from "next/image";
import setPrices from "../config/treePrices.jsx";

import pricingStyle from "./Pricing.module.scss";

const Prices = ({ pricePerFoot }) => (
  <section className={pricingStyle.main}>
    <div>
      <h3>Pricing</h3>
      <ol className={pricingStyle.list}>
        {setPrices(pricePerFoot.value).map(({ range, price }) => (
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
);

export default Prices;
