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

const createHeightCalculator = (prevCount) => (currentIndex) =>
  1 + 0.25 * (currentIndex + prevCount);

const createPriceCalculator = (basePrice, pricePerFoot) => (currentIndex) =>
  basePrice + (currentIndex + 1) * pricePerFoot;

export const setPrices = ({ basePrice, pricePerFoot, count, prevCount }) => {
  const calcHeight = createHeightCalculator(prevCount);
  const calcPrice = createPriceCalculator(basePrice, pricePerFoot);

  return Array.from({ length: count }).map((_, i) => ({
    height: calcHeight(i),
    price: calcPrice(i),
  }));
};

export const mapSrcSet = (baseUrl) => (sizes, imageName) => ({
  src: `${baseUrl}/${imageName}/${imageName}_${sizes[0]}.jpg`,
  srcset: sizes
    .map((size) => `${baseUrl}/${imageName}/${imageName}_${size}.jpg ${size}w`)
    .join(", "),
});
