// starting with 'Up to 3ft in already' because naming convention is different
const prices = [{ range: "Up to 3ft", price: 30 }];

const n = 10;

for (let i = 4; i <= n; i++) {
  prices.push({
    range: `${i - 1}ft up to ${i}ft`,
    price: n * i,
  });
}

export default prices;
