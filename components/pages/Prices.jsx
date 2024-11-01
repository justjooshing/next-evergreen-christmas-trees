import Image from "next/image";

import PriceList from "../atom/PriceList";

import pricingStyle from "./Pricing.module.scss";

const Prices = ({ prices }) => (
  <section className={pricingStyle.main}>
    <div>
      <h3>Pricing</h3>
      <PriceList prices={prices} />
      <p className={pricingStyle.pricingInfo}>
        Card purchases will incur a 1.9% surcharge
      </p>
      <p className={pricingStyle.pricingInfo}>Prices subject to change</p>
    </div>
    <div className={pricingStyle.imageWrapper}>
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
