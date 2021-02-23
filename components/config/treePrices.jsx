// starting with 'Up to 3ft in already' because naming convention is different

const setPrices = (n = 10) => {
  const prices = [{ range: "Up to 3ft", price: n * 3 }];

  for (let i = 4; i <= 10; i++) {
    prices.push({
      range: `${i - 1}ft up to ${i}ft`,
      price: n * i,
    });
  }
  return prices;
};

export default setPrices;
