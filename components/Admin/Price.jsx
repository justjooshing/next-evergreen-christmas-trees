import { useState } from "react";

import adminStyle from "../../styles/Admin.module.css";

const Price = ({ price }) => {
  const [currentPrice, setCurrentPrice] = useState(price);
  const [tempPrice, setTempPrice] = useState();

  const handlePriceSubmit = async (e) => {
    const value = parseInt(tempPrice);
    setCurrentPrice({ value });
    e.preventDefault();
    e.target.reset();
    const response = await fetch("/api/price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });
    const body = await response.json();
    e.target.reset();
    return body;
  };

  return (
    <div>
      <section>
        <h2>Price</h2>
        <form onSubmit={handlePriceSubmit}>
          <label htmlFor="price">
            <h3>Set new price</h3>
            <input
              type="number"
              id="price"
              onChange={(e) => setTempPrice(e.target.value)}
              required
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        <h3>Current Price</h3>
        <p className={adminStyle.price}>${currentPrice.value} per foot</p>
      </section>
    </div>
  );
};

export default Price;
