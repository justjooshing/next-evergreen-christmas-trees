const lastFullWeekend = (year: number, month: number) => {
  const date = new Date(year, month + 1, 0);

  const lastDate = date.getDate(); // i.e. 30
  const lastWeekday = date.getDay(); // i.e. 4 (for Thursday), 6 (for Saturday)

  return lastDate - lastWeekday - 1;
};

export const lastSaturday = lastFullWeekend(new Date().getFullYear(), 10);

export const convertToFeet = (meters: number): string => {
  const totalInches = meters * 39.3701;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return `${feet}ft ${inches}in`;
};

const createHeightCalculator = (prevCount: number) => (currentIndex: number) =>
  1 + 0.25 * (currentIndex + prevCount);

const createPriceCalculator =
  (basePrice: number, pricePerFoot: number) => (currentIndex: number) =>
    basePrice + (currentIndex + 1) * pricePerFoot;

export const setPrices = ({
  basePrice,
  pricePerFoot,
  count,
  prevCount,
}: {
  basePrice: number;
  pricePerFoot: number;
  count: number;
  prevCount: number;
}) => {
  const calcHeight = createHeightCalculator(prevCount);
  const calcPrice = createPriceCalculator(basePrice, pricePerFoot);

  return Array.from({ length: count }).map((_, i) => ({
    height: calcHeight(i),
    price: calcPrice(i),
  }));
};
