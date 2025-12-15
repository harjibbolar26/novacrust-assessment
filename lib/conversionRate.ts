export const CONVERSION_RATES: Record<string, number> = {
  // Crypto
  ETH: 3500,
  BTC: 65000,
  USDT: 1,
  SOL: 150,
  DAI: 1,

  // Fiat
  NGN: 0.0012,
  USD: 1,
};

const CURRENCY_ALIASES: Record<string, string> = {
  "USDT - CELO": "USDT",
  "USDT - TON": "USDT",
  "USDT - BNB": "USDT",
};

function resolveCurrency(currency: string): string {
  return CURRENCY_ALIASES[currency] ?? currency;
}

export function convertCurrency(
  amount: number,
  fromCurrency: string,
  toCurrency: string
): number {
  if (!amount || amount <= 0) return 0;

  const from = resolveCurrency(fromCurrency);
  const to = resolveCurrency(toCurrency);

  const fromRate = CONVERSION_RATES[from];
  const toRate = CONVERSION_RATES[to];

  if (!fromRate || !toRate) return 0;

  const amountInUSD = amount * fromRate;
  const convertedAmount = amountInUSD / toRate;

  return Math.round(convertedAmount * 100) / 100;
}
