import Image from "next/image";

import PriceList from "../atom/PriceList";

import pricingStyle from "./Pricing.module.scss";

const Prices = ({ pricePerFoot }) => (
  <section className={pricingStyle.main}>
    <div>
      <h3>Pricing</h3>
      <PriceList val={pricePerFoot.value} entryCount={undefined} />
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
