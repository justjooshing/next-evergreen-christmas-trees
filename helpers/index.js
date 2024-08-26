import { unit } from "mathjs";

const lastFullWeekend = (year, month) => {
  const date = new Date(year, month + 1, 0);

  const lastDate = date.getDate(); // i.e. 30
  const lastWeekday = date.getDay(); // i.e. 4 (for Thursday), 6 (for Saturday)

  return lastDate - lastWeekday - 1;
};

export const lastSaturday = lastFullWeekend(new Date().getFullYear(), 10);

export const convertToFeet = (meters) =>
  unit(meters, "m")
    .splitUnit(["ft", "in"])
    .map((val) => val.format({ notation: "fixed", precision: 0 }))
    .join(" ");

export const setPrices = ({ basePrice, pricePerFoot, count, prevSet }) => {
  const prices = [];

  const prevCount = prevSet?.fields.count || 0;
  for (let i = 1; i <= count; i++) {
    const price = basePrice + i * pricePerFoot;
    const mIncrement = 1 + ((i + prevCount) * 0.25 - 0.25);
    prices.push({
      height: mIncrement,
      price,
    });
  }

  return prices;
};
