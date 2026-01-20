import fs from 'fs';
import path from 'path';

export interface PriceData {
  productId: string;
  productName: string;
  country: string;
  countryCode: string;
  officialPrice: string | null;
  officialCurrency: string;
  taxRate: number;
  taxIncluded: boolean;
  vatRefundEligible: boolean;
  refundPercentage: number;
  priceInUsd?: number;
}

export function loadPricesFromCSV(): PriceData[] {
  const csvPath = path.join(process.cwd(), 'data', 'prices.csv');
  const fileContents = fs.readFileSync(csvPath, 'utf-8');
  const lines = fileContents.trim().split('\n');

  const prices: PriceData[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const matches = line.match(/([^,]*(?:"[^"]*")?[^,]*),/g);
    if (!matches) continue;

    const values = matches.map(m => m.slice(0, -1).replace(/^"|"$/g, ''));
    
    const productId = values[0];
    const productName = values[1];
    const country = values[2];
    const countryCode = values[3];
    const officialPrice = values[4] || null;
    const officialCurrency = values[5];
    const taxRate = parseFloat(values[6]);
    const taxIncluded = values[7] === 'true';
    const vatRefundEligible = values[8] === 'true';
    const refundPercentage = parseFloat(values[9]);

    let priceInUsd: number | undefined;
    if (officialPrice) {
      const numericPrice = parseFloat(officialPrice);
      const rates: {[key: string]: number} = {
        'USD': 1, 'GBP': 0.79, 'EUR': 0.92, 'THB': 35.60, 'HKD': 7.80,
        'JPY': 148, 'MYR': 4.62, 'CAD': 1.35, 'SGD': 1.34, 'VND': 24500,
        'TWD': 31.50, 'AED': 3.67, 'AUD': 1.52, 'NZD': 1.65, 'KRW': 1320,
        'CNY': 7.25, 'PHP': 56.50, 'MXN': 17.20, 'INR': 83.20, 'PLN': 4.05,
        'DKK': 6.88, 'SEK': 10.50, 'NOK': 10.80, 'CZK': 23.20, 'TRY': 32.50,
        'CLP': 950, 'BRL': 4.98
      };
      
      const rate = rates[officialCurrency] || 1;
      priceInUsd = numericPrice / rate;
    }

    prices.push({
      productId,
      productName,
      country,
      countryCode,
      officialPrice,
      officialCurrency,
      taxRate,
      taxIncluded,
      vatRefundEligible,
      refundPercentage,
      priceInUsd
    });
  }

  return prices;
}
