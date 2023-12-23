export const menu = {
  '17': {
    priceLabel: '$375',
    name: '17 yard dumpster'
  },
  '22': {
    priceLabel: '$425',
    name: '22 yard dumpster'
  }
};

export function getPriceOfItem(dumpsterLength, rentalDurationDays) {
  const menuItem = menu[dumpsterLength];
  if (!menuItem) {
    throw new Error(`Dumpster length '${dumpsterLength}' does not exist`);
  }

  const { priceFn } = menuItem;
  // Calculate the price and generate the payment URL for it
  const basePrice = priceFn(rentalDurationDays);
  const price = basePrice;// * 1.06; // Michigan 6% sales tax
  return price;
}
