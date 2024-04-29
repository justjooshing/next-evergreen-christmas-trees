import { unit } from "mathjs";

const lastFullWeekend = (year, month) => {
  const date = new Date(year, month);
  const weekday = date.getDay(); //gets first day of the month
  date.setDate(date.getDate() - weekday - 1); //backtracks to the last Sunday -1 (so, saturday)
  return date.getDate(); //returns day number
};

export const lastSaturday = lastFullWeekend(new Date().getFullYear(), 11);

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
