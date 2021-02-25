import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setPrice } from "../../redux/actions";

import adminStyle from "../../styles/Admin.module.css";

const Price = () => {
  const price = useSelector((state) => state.price);
  const [tempPrice, setTempPrice] = useState();
  const dispatch = useDispatch();

  const handlePriceSubmit = async (e) => {
    e.preventDefault();
    const value = parseInt(tempPrice);
    // Does it matter if I set the price here now
    // or only once fetch is returned?
    dispatch(setPrice({ value }));
    e.target.reset();

    await fetch("/api/price", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value }),
    });
  };

  return (
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
      <p className={adminStyle.price}>${price} per foot</p>
    </section>
  );
};

export default Price;
