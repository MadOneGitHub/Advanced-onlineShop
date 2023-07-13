const CURRENCY_FORMATER = new Intl.NumberFormat(undefined, {
  currency: "EUR",
  style: "currency",
});

export function formatCurrency(number: nember) {
  return CURRENCY_FORMATER.format(number);
}
